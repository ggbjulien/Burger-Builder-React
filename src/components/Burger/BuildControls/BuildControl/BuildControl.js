import React from "react";
import BuildControl from "./BuildControl";

const BuildControl = props => (
  <div>
    <div>{props.label}</div>
    <button>Less</button>
    <button>More</button>
  </div>
);

export default BuildControl;
