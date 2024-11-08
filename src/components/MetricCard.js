import React from 'react';

const MetricCard = ({ title, value }) => {
  return (
    <div className="relative tooltip-container">
      <div className="tooltip shadow-lg">
        {/* add metric explanation/context here */}
        Context about stat
      </div>
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-80 
        transform transition-all duration-300 hover:scale-105 
        border-2 border-navy/10 hover:border-navy/30 group">
        {/* update with actual metric names and values */}
        <h3 className="text-navy font-semibold mb-3 group-hover:text-navy-dark 
          transition-colors text-lg">{title}</h3>
        <p className="text-3xl font-bold text-text-primary">{value || '-'}</p>
      </div>
    </div>
  );
};

export default MetricCard; 