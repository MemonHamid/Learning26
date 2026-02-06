import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./component/HeaderComponent";
import { FooterComponent } from "./component/FooterComponent";
import ContentComponent from "./component/ContentComponet";
import { MapDemo1 } from "./component/MapDemo1";
import { MapDemo2 } from "./component/MapDemo2";
import { MapDemo3 } from "./component/MapDemo3";
import { MapDemo4 } from "./component/MapDemo4";
import { MapDemo5 } from "./component/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./component/NetflixHome";
import { NetflixMovies } from "./component/NetflixMovies";
import { NetflixShows } from "./component/NetflixShows";
import { Navbar } from "./component/Navbar";
import { HomeComponet } from "./component/HomeComponet";
import { ErrorNotFound } from "./component/ErrorNotFound";
import { Watch } from "./component/Watch";
import { FunctionDemo1 } from "./component/FunctionDemo1";
import { UseStateDemo2 } from "./component/UseStateDemo2";
import { UseStateDemo3 } from "./component/UseStateDemo3";
import { UseStateDemo1 } from "./component/UseStateDemo1";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponet/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        <Route path="/fundemo1" element={<FunctionDemo1/>}></Route>
        <Route path="/usestatedemo1" element={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element={<UseStateDemo3/>}></Route>
      </Routes>
    </div>
  );
}

export default App;