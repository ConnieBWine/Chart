import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from 'recharts';
import Papa from 'papaparse';
import _ from 'lodash';
import csvData from './data.csv?raw';

// Region mapping for colors (keeping the same as before)
const regionMap = {
  'USA': 'North America', 'CAN': 'North America',
  'GBR': 'Europe', 'FRA': 'Europe', 'DEU': 'Europe', 'ITA': 'Europe', 'ESP': 'Europe',
  'SWE': 'Europe', 'NOR': 'Europe', 'DNK': 'Europe', 'FIN': 'Europe', 'NLD': 'Europe',
  'BEL': 'Europe', 'CHE': 'Europe', 'AUT': 'Europe', 'IRL': 'Europe', 'PRT': 'Europe',
  'JPN': 'Asia', 'KOR': 'Asia', 'SGP': 'Asia',
  'AUS': 'Oceania',
  'CHL': 'South America', 'COL': 'South America', 'MEX': 'North America',
  'TUR': 'Asia', 'ISR': 'Asia'
};

const colorMap = {
  'North America': '#2563eb',
  'Europe': '#16a34a',
  'Asia': '#dc2626',
  'Oceania': '#9333ea',
  'South America': '#ea580c',
  'Other': '#6b7280'
};

const Dashboard = () => {
  const [processedData, setProcessedData] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.errors.length > 0) {
            console.error('Parsing errors:', results.errors);
            setError('Error parsing data');
            return;
          }

          const cleanData = results.data.filter(row => 
            row.OBS_VALUE && 
            row.TIME_PERIOD && 
            row.REF_AREA &&
            row['Reference area']  // Using bracket notation for space in field name
          );

          processData(cleanData);
          setLoading(false);
        },
        error: (error) => {
          console.error('Parsing error:', error);
          setError('Error parsing data');
          setLoading(false);
        }
      });
    } catch (error) {
      console.error('Loading error:', error);
      setError('Error loading data');
      setLoading(false);
    }
  }, []);
  
  const processData = (rawData) => {
    try {
      // Process data for main scatter plot
      const totalData = rawData.filter(row => row.SEX === '_T');
      const processed = totalData.map(row => ({
        country: row.REF_AREA,
        countryName: row['Reference area'],
        year: row.TIME_PERIOD,
        value: row.OBS_VALUE,
        region: regionMap[row.REF_AREA] || 'Other',
        size: Math.max(row.OBS_VALUE * 2, 20)
      }));
      setProcessedData(processed);

      // Process gender comparison data
      const latestYear = _.maxBy(rawData, 'TIME_PERIOD').TIME_PERIOD;
      const genderProcessed = _(rawData)
        .filter(row => row.TIME_PERIOD === latestYear && row.SEX !== '_T')
        .groupBy('REF_AREA')
        .map((countryData, country) => ({
          country,
          countryName: countryData[0]['Reference area'],
          male: _.find(countryData, { SEX: 'M' })?.OBS_VALUE || 0,
          female: _.find(countryData, { SEX: 'F' })?.OBS_VALUE || 0
        }))
        .sortBy(d => -Math.max(d.male, d.female))
        .value();
      setGenderData(genderProcessed);
    } catch (error) {
      console.error('Processing error:', error);
      setError('Error processing data');
    }
  };

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        OECD Asthma Hospital Admissions (per 100,000 inhabitants)
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Scatter Plot */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Hospital Admissions by Country and Region</h2>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 60 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                dataKey="year" 
                domain={['dataMin', 'dataMax']}
                tickFormatter={tick => tick.toString()}
                name="Year" 
              />
              <YAxis 
                type="number" 
                dataKey="value" 
                name="Admissions"
                label={{ value: 'Admissions per 100,000', angle: -90, position: 'insideLeft' }} 
              />
              <ZAxis type="number" dataKey="size" range={[50, 400]} />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 border rounded shadow">
                        <p className="font-semibold">{data.countryName}</p>
                        <p>Year: {data.year}</p>
                        <p>Admissions: {data.value.toFixed(1)}</p>
                        <p>Region: {data.region}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend />
              {Object.keys(colorMap).map(region => (
                <Scatter
                  key={region}
                  name={region}
                  data={processedData.filter(d => d.region === region)}
                  fill={colorMap[region]}
                />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Gender Comparison */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Gender Comparison (Latest Year)</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={genderData.slice(0, 10)} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis 
                dataKey="countryName" 
                type="category" 
                width={120}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="male" name="Male" fill="#3b82f6" />
              <Bar dataKey="female" name="Female" fill="#ec4899" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Average Admission Rate */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800">Average Admission Rate</h3>
            <p className="text-2xl font-bold text-blue-600">
              {(_.meanBy(processedData, 'value') || 0).toFixed(1)}
            </p>
          </div>
          
          {/* Highest Rate Country */}
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800">Highest Rate</h3>
            <p className="text-2xl font-bold text-green-600">
              {(_.maxBy(processedData, 'value')?.value || 0).toFixed(1)}
            </p>
            <p className="text-sm text-green-700">
              {_.maxBy(processedData, 'value')?.countryName}
            </p>
          </div>

          {/* Total Countries */}
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800">Countries Tracked</h3>
            <p className="text-2xl font-bold text-purple-600">
              {_.uniqBy(processedData, 'country').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;