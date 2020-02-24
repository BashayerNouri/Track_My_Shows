import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
        <section className="bg-dark footer"><span class="year">&copy; {(new Date().getFullYear())} </span> Track My Shows </section>
    );
  }
}
export default Footer;