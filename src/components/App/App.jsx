
// imports - middleware
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';



// Imports - components
import Header from '../Header/Header.jsx';
import AdminHeader from '../AdminHeader/AdminHeader.jsx';
import BeginForm from '../BeginForm/BeginForm.jsx';
import TrooperID from '../trooperID/trooperID.jsx';
import StarSystems from '../StarSystem/StarSystem.jsx';
import Resources from '../Resources/Resources.jsx';
import Encounters from '../Encounters/Encounters.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess.jsx';
import AdminPage from '../AdminPage/AdminPage.jsx';



function App() {

  const dispatch = useDispatch();

  // fetch the star systems (populates dropdown menu in star systems)
  const fetchStarSystems = () => {
    console.log(`fetching star system list`);

    axios.get('/fetch').then((response) => {
      console.log(`fetch StarSystems Body:`, response.data );

      let action = { type: 'SET_STAR_SYSTEM_LIST', payload: response.data }
      dispatch(action);

    });
  }
  useEffect(() => {
    fetchStarSystems();
  }, []);


  return (
    <div className='App'>
      <Router>

        <Route exact path='/admin'> <AdminHeader /> <AdminPage /> </Route>
        <Route exact path="/"> <Header /> <BeginForm /> </Route>
        <Route exact path="/trooperID" > <Header /> <TrooperID /> </Route>
        <Route exact path="/starSystems"> <Header /> <StarSystems /> </Route>
        <Route exact path="/resources"> <Header /> <Resources /> </Route>
        <Route exact path="/encounters"> <Header /> <Encounters /> </Route>
        <Route exact path="/comments"> <Header /> <Comments /> </Route>
        <Route exact path="/review"> <Header /> <Review /> </Route>
        <Route exact path="/success"> <Header /> <SubmitSuccess /> </Route>

      </Router>
    </div>
  );
}

export default App;
