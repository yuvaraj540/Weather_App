import React from 'react';

function DailyForecastCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-white">Daily Forecast (Next 7 Days)</h2>
      <div className="flex gap-4 overflow-x-auto p-2">
        {weatherData.daily.map((day, index) => (
          <div key={index} className="min-w-[150px] bg-white p-4 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold text-blue-600">{day.date}</p>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="mx-auto mb-2"
            />
            <p className="text-lg">{day.day.avgtemp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecastCard;
