import React, { Component } from "react";
import { connect } from "react-redux";
import { addCounter } from "./actions/index";
import { bindActionCreators } from "redux";

function AddCounter(props) {
  return (
    <div className="container">
      <form>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-primary"
              onClick={(e) => {
                e.preventDefault();
                props.dispatch(addCounter());
              }}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounter, dispatch) };
}
export default connect(mapDispatchToProps)(AddCounter);
