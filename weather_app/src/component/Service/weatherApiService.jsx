import React from "react";
import axios from 'axios';

const api = import.meta.env.VITE_WEATHER_API_KEY; 
const url = import.meta.env.VITE_WEATHER_URL;

export const getCurrentWeather = async (city) => {

  try {
    const response = await axios.get(url,
      {
        params: {
          q: city,
          appid: api,
          units: 'metric',
        },
      }
    );
    return response.data;
  } 
  
  catch (error) {
    console.error("Weather API error:", error);
    throw new Error("City not found",error);
  }
};
