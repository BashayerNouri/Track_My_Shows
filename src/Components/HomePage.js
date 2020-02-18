import React, { Component } from "react";

//Components
import ShowsList from "./ShowsList";

//Data
import shows from "../Data/shows";

class HomePage extends Component {
  render() {
    return (
      <div className="container-responsive">
        <div className="col-12"><ShowsList shows={shows} /></div>
      </div>
    );
  }
}

export default HomePage;