import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <Link className="navbar-brand" to="/">
          Track My Shows
        </Link>
      </nav>
    );
  }
}
export default TopNavBar;