import React from 'react';

function HourlyForecastCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-white mb-2">Hourly Forecast (Next 24 Hours)</h2>
      <div className="flex gap-4 overflow-x-auto p-2">
        {weatherData.hourly.map((hour, index) => (
          <div 
            key={index} 
            className="min-w-[120px] bg-white p-4 rounded-lg shadow-lg text-center flex-shrink-0"
          >
            <p className="text-xl font-semibold text-blue-600">{hour.time}</p>
            <img
              src={hour.condition.icon}
              alt={hour.condition.text}
              className="mx-auto mb-2"
            />
            <p className="text-lg">{hour.temp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecastCard;
