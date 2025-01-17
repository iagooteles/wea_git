import axios from "axios";

// weather api //

const baseURLWeather = "https://api.weatherapi.com/v1/current.json";

export async function getWeatherData(city) {
  try {
    const { data } = await axios.get(
      baseURLWeather + `?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// github api //

const baseURLGithub = "https://api.github.com";

export async function getGithubData(name) {
  try {
    const { data } = await axios.get(baseURLGithub + `/users/${name}`);
    return data;
  } catch (err) {
    throw err;
  }
}
