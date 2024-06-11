import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import MyWeather from './pages/Myweather'
import GithubSearch from './pages/GithubSearch'
import Error from './pages/Error'

function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/myweather" element={<MyWeather/>} />
        <Route path="/githubsearch" element={<GithubSearch/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;