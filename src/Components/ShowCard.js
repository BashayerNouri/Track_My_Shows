import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//
import { deleteShow } from "../stores/actions";


//
import MarkShow from './MarkShow'



class ShowCard extends Component {
  
  render() {
    const show = this.props.show;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <img
          src={this.props.show.image.original}
          className="card-img-top"
          alt="show"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.show.name}</h5>
          <p className="card-text">{this.props.show.summary}</p>
          <Link className="btn btn-md btn-info" to={`/show/${this.props.show.id}`}>
            More
          </Link>
          <button
            className="btn btn-md btn-danger"
            onClick={() => this.props.deleteShow(show)}
          >
            DROP
          </button>
          <div>
        <MarkShow />
      </div>
        </div>
      </div>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteShow: show => dispatch(deleteShow(show))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShowCard);