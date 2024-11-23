import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Prevention from './Prevention';
import GlobalTrends from './GlobalTrends';
import Treatment from './Treatment';
import RiskFactors from './RiskFactors';
import SlideNavigation from './SlideNavigation';
import Introduction from './Introduction';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="pb-32"> {/* Add padding at bottom for navigation */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/prevention" element={<Prevention />} />
              <Route path="/globaltrends" element={<GlobalTrends />} />
              <Route path="/treatment" element={<Treatment />} />
              <Route path="/riskfactors" element={<RiskFactors />} />
            </Routes>
          </div>
        </div>
        {/* Navigation at the bottom */}
        <SlideNavigation />
      </div>
    </Router>
  );
};

export default App;