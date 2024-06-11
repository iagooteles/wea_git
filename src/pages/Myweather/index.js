import './myweather.css';
import Header from '../../Components/Header';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getWeatherData } from '../../services/api';

export default function MyWeather() {
  const [showLogo, setShowLogo] = useState(true);
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);
  const notify = () => { city === '' ? toast(`Por favor digite algo para pesquisar.`) : toast(`Sua busca por '${city}' não é válida, tente novamente. :(`) };

  async function handleSearch() {
    try {
      const response = await getWeatherData(city);
      setData(response);
      setShowLogo(false);
    } catch (err) {
      notify();
      console.log(err.message);
    }
  }

  async function clearDisplay() {
    setData([]);
    setCity('');
    setShowLogo(true);
  }

  return (
    <>
      <Header 
        title="MyWeather"
        bgColor= '#549dbe'
      />

      <div className='weather-container'>

        {showLogo && (
          <div className='logo'>
            <h1>Bem vindo ao MyWeather!</h1>
            <img src="logo-weather.png" alt="logo weather" />
          </div>
        )}

        {!showLogo && (
          <div className='cityInfo'>
            <h1>{data['location'].name} - {data['location'].country}</h1>
            <p>{data['current'].condition.text}  <img className='img-icon' src={data['current'].condition.icon} /> </p>
            <p>{data['current'].temp_c} ºC - Feels like {data['current'].feelslike_c} ºC</p>
            <p>Wind speed: {data['current'].wind_kph} km/h</p>
          </div>
        )}

        <div className='area-input'>
          <div>
            <input
              className='inputCity'
              placeholder='Digite o nome de uma cidade'
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            {!showLogo && (
              <FiX
                size={28}
                color="#fff"
                className='fix'
                onClick={clearDisplay}
              />
            )}

          </div>
          <button
            onClick={handleSearch}
          >
            <AiOutlineSearch
              size={24}
              color="#247ba0"
            />
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}