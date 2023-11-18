import React from 'react';
import axios from 'axios';
import './App.css';

// Hash Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


// Import Sections
import BeginForm from '../BeginForm/BeginForm.jsx';
import TrooperID from '../trooperID/trooperID.jsx';
import StarSystems from '../StarSystem/StarSystem.jsx';
import Resources from '../Resources/Resources.jsx';
import Encounters from '../Encounters/Encounters.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess.jsx';



function App() {

  const dispatch = useDispatch();

  // fetch the star systems
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



  // form variables


  return (
    <div className='App'>
      <Router>

        <header className='App-header'>
          <h1>Empire</h1>
          <h2>Scout Report</h2>
        </header>

        <Route exact path="/">
          <BeginForm />
        </Route>

        <Route exact path="/trooperID" >
          <TrooperID />
        </Route>

        <Route exact path="/starSystems">
          <StarSystems />
        </Route>

        <Route exact path="/resources">
            <Resources />
        </Route>

        <Route exact path="/encounters">
            <Encounters />
        </Route>

        <Route exact path="/comments">
            <Comments />
        </Route>

        <Route exact path="/review">
            <Review />
        </Route>

        <Route exact path="/success">
            <SubmitSuccess />
        </Route>

      </Router>
    </div>
  );
}

export default App;
