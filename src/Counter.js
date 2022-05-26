// Counter.js

import React, { Component } from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div className="cotainer">
      <div className="notification">
        <h1>{props.count}</h1>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Counter);
