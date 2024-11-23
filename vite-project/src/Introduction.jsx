import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Wind, // Instead of Lungs
  Users, 
  Activity, 
  BarChart, // Instead of ChartBar
  BookOpen // Instead of Book
} from 'lucide-react';

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Understanding Asthma
            <span className="text-blue-600"> Analytics & Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive analysis platform exploring asthma's impact, prevention,
            and treatment through data-driven insights and healthcare analytics.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-blue-600 mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">339M+</h3>
            <p className="text-gray-600">People affected worldwide</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-blue-600 mb-4">
              <Activity className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">14%</h3>
            <p className="text-gray-600">Of global child population affected</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-blue-600 mb-4">
              <BarChart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">$80B</h3>
            <p className="text-gray-600">Annual global healthcare costs</p>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Wind className="w-6 h-6 text-blue-600 mr-2" />
              What is Asthma?
            </h2>
            <p className="text-gray-600 mb-4">
              Asthma is a chronic respiratory condition that affects the airways in your lungs. 
              It causes recurring periods of wheezing, chest tightness, shortness of breath, 
              and coughing, which can vary in severity from person to person.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-2" />
                Inflammation and narrowing of airways
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-2" />
                Triggered by various environmental factors
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-2" />
                Can be effectively managed with proper care
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
              About This Platform
            </h2>
            <p className="text-gray-600 mb-4">
              Our analytics platform provides comprehensive insights into asthma care, 
              from hospital admissions to global trends. We help healthcare providers, 
              researchers, and patients understand patterns and improve outcomes.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-2" />
                Data-driven insights and analysis
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-2" />
                Evidence-based recommendations
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-2" />
                Interactive visualizations and trends
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button 
            onClick={() => navigate('/riskfactors')}
            className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              Risk Factors
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-gray-600">
              Explore the various factors that can increase the risk of developing asthma.
            </p>
          </button>

          <button 
            onClick={() => navigate('/prevention')}
            className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              Prevention Strategies
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-gray-600">
              Learn about effective methods to prevent and control asthma symptoms.
            </p>
          </button>

          <button 
            onClick={() => navigate('/treatment')}
            className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              Treatment Options
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-gray-600">
              Discover current treatment approaches and their effectiveness.
            </p>
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Explore?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your journey through our comprehensive asthma analytics platform 
              and discover insights that can help improve asthma care and management.
            </p>
            <button
              onClick={() => navigate('/riskfactors')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Begin Exploration
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;