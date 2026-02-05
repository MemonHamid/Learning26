import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './component/HeaderComponent';
import { FooterComponent } from './component/FooterComponent';
import ContentComponet from './component/ContentComponet';
import { MapDemo1 } from './component/MapDemo1';
import { MapDemo2 } from './component/MapDemo2';
import { MapDemo3 } from './component/MapDemo3';
import { MapDemo4 } from './component/MapDemo4';
import { MapDemo5 } from './component/MapDemo5';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './component/Navbar';
import { NetflixHome } from './component/NetflixHome';
import { NetflixMovies } from './component/NetflixMovies';
import { NetflixShows } from './component/NetflixShows';
import { HomeComponet } from './component/HomeComponet';

//import './App.css'

function App() {
  
  return (
    <div>
     <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App
