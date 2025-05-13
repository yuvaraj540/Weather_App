import React from "react";

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full max-w-xs mx-auto transition-transform hover:scale-105 duration-300 ease-in-out">
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">{weatherData.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
        className="mx-auto mb-4"
      />

      <p className="text-lg text-blue-600 font-medium">{weatherData.weather[0].main}</p>
      <p className="text-sm text-gray-500 capitalize mb-4">{weatherData.weather[0].description}</p>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <p>🌡️ <span className="font-semibold">{weatherData.main.temp}°C</span></p>
        <p>💧 <span className="font-semibold">{weatherData.main.humidity}%</span></p>
        <p>🌬️ <span className="font-semibold">{weatherData.wind.speed} m/s</span></p>
      </div>

      {/* Additional Styling for a responsive layout
      <div className="mt-6">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
          Refresh
        </button>
      </div> */}
    </div>
  );
}

export default WeatherCard;
