// import logo from './logo.svg';
import './App.css';
import Campaigns from 'src/components/Campaigns/Campaigns';
import Header from 'src/components/Header/Header';
import Splash from 'src/components/Splash/Splash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import splashImg from 'src/assets/images/heart.jpeg';

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
        {/* <Routes>
          <Route path = '/' element={<Board apiUrl = {apiUrl} />} />
          <Route path = '/' element={<AllCampaigns apiUrl = {apiUrl} />} />
        </Routes> */}
        <Splash Logo = {splashImg}/>
        <Campaigns />
      </BrowserRouter>
    </div>
  );
}

export default App;
