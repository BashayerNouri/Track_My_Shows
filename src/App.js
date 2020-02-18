import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

//Components
import HomePage from "./Components/HomePage";
import ShowDetail from "./Components/ShowDetail";

//Data
import shows from "./Data/shows";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/show/:showID"
          render={props => <ShowDetail {...props} shows={shows} />}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}


export default App;
