// RemoveCounter.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCounter } from "./actions/index";
import { bindActionCreators } from "redux";

function RemoveCounter(props) {
  return (
    <div className="container">
      <form>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-primary"
              onClick={(e) => {
                e.preventDefault();
                props.dispatch(removeCounter());
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(removeCounter, dispatch) };
}

export default connect(mapDispatchToProps)(RemoveCounter);
