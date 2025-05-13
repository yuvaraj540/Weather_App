import { useState } from 'react';
import { getCurrentWeather } from '../../Service/weatherApiService';
import WeatherCard from '../../Card/WeatherCard';
import HourlyForecastCard from '../../Card/HourlyForecastCard';
import DailyForecastCard from '../../Card/DailyForecastCard';

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('⚠️ Please enter a city name');
      return;
    }

    try {
      const data = await getCurrentWeather(city);
      setWeatherData(data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError('❌ City not found. Try another one.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-200 via-sky-300 to-blue-400 px-4 py-8">
      <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-md mb-6">🌦️ Weather App</h1>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          🔍 Get Weather
        </button>

        {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}

        {weatherData && (
          <div className="mt-6 space-y-6">
            <WeatherCard weatherData={weatherData.current} />
          </div>
        )}
      </div>
      <div>
            {weatherData && (
              
                <div className="flex gap-4">
                  <div className="flex-1 overflow-x-auto">
                    <HourlyForecastCard weatherData={weatherData} />
                  </div>
                </div>
              
            )}
      </div>
      <div>
            {weatherData && (
              
                <div className="flex gap-4">
                  <div className="flex-1 overflow-x-auto">
                    <DailyForecastCard weatherData={weatherData} />
                  </div>
                </div>
            )}
      </div>
    </div>
  );
};

export default WeatherPage;
