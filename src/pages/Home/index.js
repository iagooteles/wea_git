import './home.css';
import { Link } from 'react-router-dom';
import { BsSignpost } from 'react-icons/bs';
import { TiWeatherStormy } from 'react-icons/ti';

export default function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='boxes-container'>

          <div className='box'>
            <div>
              <h2>Github Search App</h2>
              <p>Procure informações sobre seus usuários favoritos no Github!</p>
              <p>Clique na placa para navegar!</p>
            </div>
            <div className='box-icon'>
              <Link to='githubsearch'>
                <BsSignpost
                  className='icon-path'
                  size={38}
                />
              </Link>
            </div>
          </div>

          <div className='box'>
            <div>
              <h2>MyWeather App</h2>
              <p>Consulte como está o tempo em qualquer cidade do mundo!</p>
              <p>Clique na núvem para navegar!</p>
            </div>
            <div className='box-icon'>
              <Link to='myweather'>
                <TiWeatherStormy
                  className='icon-path'
                  size={38}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}