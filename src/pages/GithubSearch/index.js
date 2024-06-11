import './githubsearch.css';
import Header from '../../Components/Header';

import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getGithubData } from '../../services/api';

export default function GithubSearch() {
  const [showProfile, setShowProfile] = useState(false);
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const notify = () => { name === '' ? toast(`Por favor digite algo para pesquisar.`) : toast(`Sua busca por '${name}' não é válida, tente novamente. :(`) };

  async function handleSearch() {
    try {
      const response = await getGithubData(name);
      setData(response);
      setShowProfile(true);
      setName('');

      console.log(data);
    } catch (err) {
      notify();
      console.log(err.message);
    }
  }

  function clearDisplay() {
    setData([]);
    setName('');
    setShowProfile(false);
  }

  return (
    <>
      <Header
        title="GithubSearch"
        bgColor='#0087d7'
      />

      <div className='githubSearch-container'>

        {!showProfile && (
          <div className='avatar'>
            <h1>Bem vindo ao githubSearch</h1>
            <img src="profile.png" alt="Profile welcome page" />
          </div>
        )}

        {showProfile && (
          <div className='profileInfoContainer'>
            <img src={data.avatar_url} alt='avatar' />
            <div className='profileContent'>
              <h3>{data.name}</h3>
              <a href={data.html_url}>
                <AiFillGithub
                  size={22}
                  className='github-icon'
                />
                {data.html_url}
              </a>
              <p>Rep públicos: {data.public_repos}</p>
              <p>Seguidores: {data.followers}</p>
            </div>
          </div>
        )}

        <div className='profile-input'>
          <div>
            <input
              className='input-profile'
              placeholder='Pesquisar no github'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {showProfile && (
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
            <span>Pesquisar</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}