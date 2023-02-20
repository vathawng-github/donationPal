// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Campaigns from 'src/components/Campaigns/Campaigns';
import Header from 'src/components/Header/Header';
import Splash from 'src/components/Splash/Splash';


import splashImg from 'src/assets/images/heart.jpeg';
import AllCampaigns from './components/Campaigns/AllCampaigns';

function App() {
  let apiURL = '';
   if (process.env.NODE_ENV === 'production'){
      apiURL = process.env.REACT_APP_PROD_API_URL;
   } else {
    apiURL = process.env.REACT_APP_DEV_API_URL;
   }
   console.log(apiURL);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
         <Routes>
          <Route path = '/' element={<Splash Logo = {splashImg}/>} />
          <Route path = '/Campaigns' element={<Campaigns apiURL={apiURL} />}/>
          <Route path="/Campaigns/:_id" element={<AllCampaigns apiURL={apiURL} />}/>;
        </Routes>
        <Campaigns />
      </BrowserRouter>
    </div>
  );
}

export default App;
