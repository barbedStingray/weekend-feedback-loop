import React from 'react';
import axios from 'axios';
import './App.css';

// Hash Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';


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

  // form variables


  return (
    <div className='App'>
      <Router>

        <header className='App-header'>
          <h1 className='App-title'>Empire Patrol Report</h1>
          <h4>Don't forget it!</h4>
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
