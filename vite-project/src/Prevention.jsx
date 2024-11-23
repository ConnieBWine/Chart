import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Mock data for prevention effectiveness
const preventionScoreData = [
  { category: 'Medication Adherence', score: 85, fullMark: 100 },
  { category: 'Environmental Control', score: 72, fullMark: 100 },
  { category: 'Regular Check-ups', score: 90, fullMark: 100 },
  { category: 'Trigger Avoidance', score: 78, fullMark: 100 },
  { category: 'Action Plan Compliance', score: 83, fullMark: 100 },
  { category: 'Exercise/Fitness', score: 65, fullMark: 100 },
];

const interventionData = [
  { name: 'Education Programs', cost: 1000, impact: 75, savings: 3000 },
  { name: 'Home Modifications', cost: 2000, impact: 85, savings: 4500 },
  { name: 'Regular Monitoring', cost: 800, impact: 90, savings: 5000 },
  { name: 'Allergen Testing', cost: 500, impact: 70, savings: 2000 },
  { name: 'Air Quality Tools', cost: 300, impact: 65, savings: 1500 },
];

const riskFactors = [
  { factor: 'Tobacco Smoke', risk: 85, preventable: true },
  { factor: 'Air Pollution', risk: 75, preventable: true },
  { factor: 'Pet Dander', risk: 70, preventable: true },
  { factor: 'Dust Mites', risk: 65, preventable: true },
  { factor: 'Physical Activity', risk: 45, preventable: true },
];

const Prevention = () => {
  const [selectedSection, setSelectedSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {/* Navigation Header */}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-900">Asthma Prevention & Control</h1>
        <Link 
          to="/" 
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View Hospital Admissions Data
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Prevention Success Rate</h3>
          <p className="text-3xl font-bold text-green-600">76%</p>
          <p className="text-sm text-gray-600">Based on patient outcomes</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Cost Savings</h3>
          <p className="text-3xl font-bold text-blue-600">$3,200</p>
          <p className="text-sm text-gray-600">Average annual per patient</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality of Life Improvement</h3>
          <p className="text-3xl font-bold text-purple-600">85%</p>
          <p className="text-sm text-gray-600">Patient reported improvement</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Prevention Score Radar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Prevention Effectiveness Score</h2>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={preventionScoreData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Prevention Score"
                dataKey="score"
                stroke="#4f46e5"
                fill="#4f46e5"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Intervention Impact Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Intervention Cost-Benefit Analysis</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={interventionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cost" name="Cost ($)" fill="#ef4444" />
              <Bar dataKey="savings" name="Savings ($)" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Prevention Checklist */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Prevention Checklist</h2>
          <div className="space-y-4">
            {riskFactors.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.preventable ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="font-medium">{item.factor}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${item.risk}%` }}
                    />
                  </div>
                  <span className="ml-3 text-sm font-medium">{item.risk}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Key Prevention Strategies</h2>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-900">Environmental Control</h3>
              <p className="text-sm text-indigo-700 mt-1">
                Regular cleaning, air filtration, and humidity control can reduce asthma triggers by up to 70%.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900">Medication Adherence</h3>
              <p className="text-sm text-green-700 mt-1">
                Proper use of preventive medications can reduce asthma attacks by up to 85%.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900">Regular Monitoring</h3>
              <p className="text-sm text-purple-700 mt-1">
                Daily peak flow monitoring can help predict and prevent asthma attacks.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900">Action Plan</h3>
              <p className="text-sm text-blue-700 mt-1">
                Having a written asthma action plan reduces hospital visits by 50%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Connection to Hospital Admissions */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Impact on Hospital Admissions</h2>
        <div className="flex items-center justify-between">
          <div className="text-gray-700">
            <p>Effective prevention strategies have been shown to reduce hospital admissions by up to 60%. 
            View the detailed hospital admissions data to see the impact of prevention programs.</p>
          </div>
          <Link 
            to="/" 
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors ml-4"
          >
            View Admissions Analysis →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prevention;