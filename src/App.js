import React from "react";
import Navbar from "./Components/navbar/Navbar";
import {action,orginals,RomanceMovies} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
 return(
  <div className="App">
   <Navbar/>
   <Banner/>
   <RowPost url={orginals} title='Netflix Orginals'/>
   <RowPost  url={action} title='Actions' isSmall/>
   <RowPost  url={RomanceMovies} title='Romance Movies' isSmall/>


  </div>
 )
}

export default App;
