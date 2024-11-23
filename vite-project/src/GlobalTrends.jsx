import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for global trends
const globalPrevalenceData = [
  { year: 2010, asia: 234, europe: 310, namerica: 280, samerica: 200, africa: 190, oceania: 150 },
  { year: 2012, asia: 245, europe: 315, namerica: 290, samerica: 215, africa: 205, oceania: 160 },
  { year: 2014, asia: 265, europe: 325, namerica: 310, samerica: 225, africa: 220, oceania: 175 },
  { year: 2016, asia: 285, europe: 340, namerica: 325, samerica: 240, africa: 240, oceania: 190 },
  { year: 2018, asia: 310, europe: 355, namerica: 345, samerica: 260, africa: 265, oceania: 205 },
  { year: 2020, asia: 340, europe: 370, namerica: 365, samerica: 285, africa: 290, oceania: 225 },
  { year: 2022, asia: 375, europe: 385, namerica: 385, samerica: 310, africa: 320, oceania: 245 },
];

const ageDistributionData = [
  { age: '0-4', male: -15.4, female: 14.8 },
  { age: '5-9', male: -20.8, female: 19.5 },
  { age: '10-14', male: -24.5, female: 23.2 },
  { age: '15-19', male: -18.2, female: 17.5 },
  { age: '20-24', male: -15.8, female: 15.2 },
  { age: '25-34', male: -12.4, female: 11.8 },
  { age: '35-44', male: -10.2, female: 9.8 },
  { age: '45-54', male: -8.5, female: 8.2 },
  { age: '55-64', male: -6.8, female: 6.5 },
  { age: '65+', male: -5.2, female: 5.0 },
];

const riskFactorsData = [
  { name: 'Genetic Predisposition', value: 30 },
  { name: 'Environmental Factors', value: 25 },
  { name: 'Allergies', value: 20 },
  { name: 'Respiratory Infections', value: 15 },
  { name: 'Occupational Hazards', value: 10 },
];

const comorbidityData = [
  { condition: 'Allergic Rhinitis', percentage: 75, severity: 'high' },
  { condition: 'Eczema', percentage: 45, severity: 'medium' },
  { condition: 'GERD', percentage: 65, severity: 'high' },
  { condition: 'Obesity', percentage: 35, severity: 'medium' },
  { condition: 'Sleep Apnea', percentage: 30, severity: 'medium' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const GlobalTrends = () => {
  const [selectedMetric, setSelectedMetric] = useState('prevalence');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-900">Global Asthma Trends & Patterns</h1>
        <div className="space-x-4">
          <Link 
            to="/prevention" 
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Prevention Strategies
          </Link>
          <Link 
            to="/" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Hospital Admissions
          </Link>
        </div>
      </div>

      {/* Global Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Global Prevalence</h3>
          <p className="text-3xl font-bold text-purple-600">339M</p>
          <p className="text-sm text-gray-600">People affected worldwide</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Annual Growth Rate</h3>
          <p className="text-3xl font-bold text-blue-600">+2.8%</p>
          <p className="text-sm text-gray-600">Year over year increase</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Children Affected</h3>
          <p className="text-3xl font-bold text-green-600">14%</p>
          <p className="text-sm text-gray-600">Of global child population</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Economic Impact</h3>
          <p className="text-3xl font-bold text-red-600">$80B</p>
          <p className="text-sm text-gray-600">Annual global costs</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Global Prevalence Trends */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Regional Prevalence Trends (Cases per 100.000 population)</h2>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={globalPrevalenceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="europe" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="namerica" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="asia" stackId="1" stroke="#ffc658" fill="#ffc658" />
              <Area type="monotone" dataKey="samerica" stackId="1" stroke="#ff7300" fill="#ff7300" />
              <Area type="monotone" dataKey="africa" stackId="1" stroke="#0088FE" fill="#0088FE" />
              <Area type="monotone" dataKey="oceania" stackId="1" stroke="#00C49F" fill="#00C49F" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Age-Gender Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Age-Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={ageDistributionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[-30, 30]} />
              <YAxis dataKey="age" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="male" fill="#3b82f6" />
              <Bar dataKey="female" fill="#ec4899" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Factors Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Risk Factors Distribution</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={riskFactorsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {riskFactorsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Comorbidity Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Common Comorbidities</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={comorbidityData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="condition" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="percentage" fill="#8884d8">
                {comorbidityData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.severity === 'high' ? '#ef4444' : '#60a5fa'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Key Global Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900">Geographic Patterns</h3>
            <p className="text-sm text-purple-700 mt-1">
              Highest prevalence in developed regions with significant urban populations.
              <Link to="/" className="block mt-2 text-purple-600 hover:underline">
                View regional admission rates →
              </Link>
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900">Prevention Impact</h3>
            <p className="text-sm text-blue-700 mt-1">
              Early intervention shows 45% reduction in severe cases.
              <Link to="/prevention" className="block mt-2 text-blue-600 hover:underline">
                Explore prevention strategies →
              </Link>
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900">Future Projections</h3>
            <p className="text-sm text-green-700 mt-1">
              Expected 15% increase in global prevalence by 2030 without intervention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTrends;