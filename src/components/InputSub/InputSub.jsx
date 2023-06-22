/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InputSub = ({
  subName = "Mon espace de travail",
  content = "SuperHeros Limited",
  state,
  style,
  superherosLimitedStyle,
}) => {
  return (
    <div className={`input-sub ${state}`} style={style}>
      <div className="superheros-limited" style={superherosLimitedStyle}>
        {content}
      </div>
      {state === "default" && (
        <div className="frame">
          <div className="mon-espace-de">{subName}</div>
        </div>
      )}
    </div>
  );
};

InputSub.propTypes = {
  subName: PropTypes.string,
  content: PropTypes.string,
  state: PropTypes.oneOf(["filled", "default"]),
};
