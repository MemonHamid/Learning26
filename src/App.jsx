import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import ContentComponent from "./components/ContentComponet";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Navbar } from "./components/Navbar";
import { HomeComponet } from "./components/HomeComponet";
import { ErrorNotFound } from "./components/ErrorNotFound";
import { Watch } from "./components/Watch";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { Employees } from "./components/Employees";
import { InputDemo1 } from "./components/input/InputDemo1";
import { InputDemo2 } from "./components/input/InputDemo2";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { OmdbSearch } from "./components/api/OmdbSearch";



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
        <Route path="/employees" element ={<Employees/>}></Route>
        <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
        <Route path="/inputdemo2" element = {<InputDemo2/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/formdemo4" element ={<FormDemo4/>}></Route>
        <Route path="/apidemo1" element ={<ApiDemo1/>}></Route>
        <Route path="/apidemo2" element ={<ApiDemo2/>}></Route>
        <Route path="/omdb" element ={<OmdbSearch/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;