import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Main from "./screens/Main";
import Reveal from "./screens/Reveal";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/reveal'>
            <Reveal/>
          </Route>
          <Route exact path='/'>
            <Main/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
