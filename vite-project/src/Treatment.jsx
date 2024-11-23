import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadialBarChart, RadialBar
} from 'recharts';

// Mock data for treatments
const treatmentEffectiveness = [
  { name: 'Inhaled Corticosteroids', effectiveness: 85, cost: 150, adherence: 78 },
  { name: 'Long-acting Beta Agonists', effectiveness: 75, cost: 120, adherence: 82 },
  { name: 'Combination Inhalers', effectiveness: 90, cost: 200, adherence: 85 },
  { name: 'Leukotriene Modifiers', effectiveness: 70, cost: 90, adherence: 88 },
  { name: 'Biologics', effectiveness: 95, cost: 1200, adherence: 92 },
];

const treatmentOutcomes = [
  { month: 'Month 1', symptoms: 80, quality: 60, activity: 50 },
  { month: 'Month 2', symptoms: 65, quality: 70, activity: 65 },
  { month: 'Month 3', symptoms: 45, quality: 80, activity: 75 },
  { month: 'Month 4', symptoms: 30, quality: 85, activity: 85 },
  { month: 'Month 6', symptoms: 20, quality: 90, activity: 90 },
  { month: 'Month 12', symptoms: 15, quality: 95, activity: 95 },
];

const sideEffects = [
  { effect: 'Oral Thrush', mild: 15, moderate: 5, severe: 1 },
  { effect: 'Hoarseness', mild: 20, moderate: 8, severe: 2 },
  { effect: 'Throat Irritation', mild: 25, moderate: 10, severe: 3 },
  { effect: 'Headache', mild: 18, moderate: 7, severe: 1 },
  { effect: 'Anxiety', mild: 12, moderate: 5, severe: 1 },
];

const patientSatisfaction = [
  { name: 'Very Satisfied', value: 45 },
  { name: 'Satisfied', value: 30 },
  { name: 'Neutral', value: 15 },
  { name: 'Dissatisfied', value: 7 },
  { name: 'Very Dissatisfied', value: 3 },
];

const COLORS = ['#4CAF50', '#8BC34A', '#FFEB3B', '#FF9800', '#F44336'];

const Treatment = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-900">Asthma Treatment Analytics</h1>
        <div className="space-x-4">
          <Link 
            to="/globaltrends" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Global Trends
          </Link>
          <Link 
            to="/prevention" 
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Prevention
          </Link>
        </div>
      </div>

      {/* Treatment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Average Success Rate</h3>
          <p className="text-3xl font-bold text-green-600">83%</p>
          <p className="text-sm text-gray-600">Across all treatments</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Patient Adherence</h3>
          <p className="text-3xl font-bold text-blue-600">76%</p>
          <p className="text-sm text-gray-600">Treatment compliance</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality of Life</h3>
          <p className="text-3xl font-bold text-purple-600">+65%</p>
          <p className="text-sm text-gray-600">Average improvement</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Cost Effectiveness</h3>
          <p className="text-3xl font-bold text-teal-600">89%</p>
          <p className="text-sm text-gray-600">Return on investment</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Treatment Effectiveness Comparison */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Treatment Effectiveness vs Cost</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={treatmentEffectiveness}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
              <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="effectiveness" name="Effectiveness %" fill="#82ca9d" />
              <Bar yAxisId="right" dataKey="cost" name="Cost ($)" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Treatment Outcomes Over Time */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Treatment Outcomes Timeline</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={treatmentOutcomes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="symptoms" name="Symptom Reduction" stroke="#8884d8" />
              <Line type="monotone" dataKey="quality" name="Quality of Life" stroke="#82ca9d" />
              <Line type="monotone" dataKey="activity" name="Activity Level" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Side Effects Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Side Effects Profile</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sideEffects} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="effect" type="category" width={120} />
              <Tooltip />
              <Legend />
              <Bar dataKey="mild" name="Mild" stackId="a" fill="#82ca9d" />
              <Bar dataKey="moderate" name="Moderate" stackId="a" fill="#ffc658" />
              <Bar dataKey="severe" name="Severe" stackId="a" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Patient Satisfaction */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Patient Satisfaction</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={patientSatisfaction}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {patientSatisfaction.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Treatment Guidelines Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Treatment Guidelines & Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900">Initial Treatment</h3>
            <p className="text-sm text-green-700 mt-1">
              Start with low-dose inhaled corticosteroids for most patients.
              <Link to="/prevention" className="block mt-2 text-green-600 hover:underline">
                View prevention strategies →
              </Link>
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900">Treatment Escalation</h3>
            <p className="text-sm text-blue-700 mt-1">
              Consider combination therapy if symptoms persist.
              <Link to="/globaltrends" className="block mt-2 text-blue-600 hover:underline">
                See global treatment patterns →
              </Link>
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900">Long-term Management</h3>
            <p className="text-sm text-purple-700 mt-1">
              Regular monitoring and adjustment based on control levels.
              <Link to="/" className="block mt-2 text-purple-600 hover:underline">
                View admission trends →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;