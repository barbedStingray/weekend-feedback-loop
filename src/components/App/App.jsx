
// imports - middleware
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';



// Imports - components
import Header from '../Header/Header.jsx';
import AdminHeader from '../AdminHeader/AdminHeader.jsx';
import TrooperID from '../TrooperID/TrooperID.jsx';
import StarSystems from '../StarSystem/StarSystem.jsx';
import Resources from '../Resources/Resources.jsx';
import Encounters from '../Encounters/Encounters.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess.jsx';
import AdminPage from '../AdminPage/AdminPage.jsx';



function App() {

  const dispatch = useDispatch();



  return (
    <div className='App'>

      <Header />

      <Routes>
        {/* <Route path='/admin'> <AdminHeader /> <AdminPage /> </Route> */}
        <Route path="/" element={<TrooperID />} />
        <Route path="/starSystems" element={<StarSystems />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/encounters" element={<Encounters />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/review" element={<Review />} />
        <Route path="/success" element={<SubmitSuccess />} />

      </Routes>
    </div>
  );
}

export default App;
