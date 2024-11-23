// components/RiskFactors.jsx
import React, { useState } from 'react';
import { 
  Dna, Heart, Users, Home, Cloud, 
  Baby, Cigarette, Factory, TreeDeciduous,
  AlertTriangle, ThermometerSun, Wind
} from 'lucide-react';

const RiskFactors = () => {
  const [activeTab, setActiveTab] = useState('genetic');

  const riskCategories = [
    {
      id: 'genetic',
      title: 'Genetic Factors',
      icon: Dna,
      color: 'blue',
      factors: [
        {
          title: 'Family History',
          description: 'Having a parent with asthma increases your risk by 3-6 times.',
          details: [
            'Inherited genetic susceptibility',
            'Multiple genes may be involved',
            'Gene-environment interactions'
          ]
        },
        {
          title: 'Genetic Variants',
          description: 'Specific genetic variations can affect lung function and immune response.',
          details: [
            'Variations in immune system genes',
            'Altered inflammatory responses',
            'Bronchial hyperresponsiveness genes'
          ]
        }
      ]
    },
    {
      id: 'environmental',
      title: 'Environmental Factors',
      icon: Cloud,
      color: 'green',
      factors: [
        {
          title: 'Air Quality',
          description: 'Poor air quality and pollution can trigger and worsen asthma.',
          details: [
            'Urban air pollution',
            'Industrial emissions',
            'Traffic-related pollutants',
            'Indoor air quality'
          ]
        },
        {
          title: 'Allergens',
          description: 'Common environmental allergens that can trigger asthma.',
          details: [
            'Pollen from trees and grasses',
            'Dust mites',
            'Pet dander',
            'Mold spores'
          ]
        }
      ]
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle Factors',
      icon: Heart,
      color: 'purple',
      factors: [
        {
          title: 'Smoking',
          description: 'Both active and passive smoking significantly increase asthma risk.',
          details: [
            'Direct tobacco smoke exposure',
            'Secondhand smoke exposure',
            'Maternal smoking during pregnancy'
          ]
        },
        {
          title: 'Physical Activity',
          description: 'Regular exercise can help manage asthma, but some activities may trigger symptoms.',
          details: [
            'Exercise-induced asthma',
            'Benefits of regular physical activity',
            'Importance of proper warm-up'
          ]
        }
      ]
    }
  ];

  const RiskCard = ({ title, description, details }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <ul className="mt-4 space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2 mt-2"></span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Asthma Risk Factors
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Understanding what increases your risk of developing asthma and what can 
            trigger asthma symptoms.
          </p>
        </div>

        {/* Risk Category Tabs */}
        <div className="mt-12">
          <div className="sm:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            >
              {riskCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex justify-center space-x-4">
              {riskCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                      activeTab === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <CategoryIcon className="h-5 w-5" />
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Risk Factor Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {riskCategories
            .find((category) => category.id === activeTab)
            ?.factors.map((factor, index) => (
              <RiskCard key={index} {...factor} />
            ))}
        </div>

        {/* Additional Risk Factors */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Other Contributing Factors
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Baby,
                title: 'Early Life Factors',
                description: 'Premature birth, low birth weight, and exposure to certain infections in early childhood.'
              },
              {
                icon: Factory,
                title: 'Occupational Exposures',
                description: 'Certain workplace chemicals, dusts, and irritants can increase asthma risk.'
              },
              {
                icon: ThermometerSun,
                title: 'Climate Factors',
                description: 'Changes in temperature and humidity can affect asthma symptoms and trigger attacks.'
              }
            ].map((factor, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center">
                  <factor.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                  {factor.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Risk Reduction Strategies
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Home,
                title: 'Indoor Environment',
                tips: [
                  'Use air purifiers',
                  'Control humidity levels',
                  'Regular cleaning to reduce allergens'
                ]
              },
              {
                icon: TreeDeciduous,
                title: 'Outdoor Activities',
                tips: [
                  'Check air quality forecasts',
                  'Avoid peak pollen times',
                  'Wear protection when needed'
                ]
              },
              {
                icon: Wind,
                title: 'Lifestyle Changes',
                tips: [
                  'Quit smoking',
                  'Regular exercise',
                  'Maintain a healthy weight'
                ]
              }
            ].map((strategy, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow p-6"
              >
                <div className="flex justify-center">
                  <strategy.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                  {strategy.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {strategy.tips.map((tip, tipIndex) => (
                    <li 
                      key={tipIndex}
                      className="flex items-center text-gray-600"
                    >
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskFactors;