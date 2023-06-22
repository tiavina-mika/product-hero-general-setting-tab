/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MenuTable = ({ showEmoji, emoji = "👩🏻‍🤝‍👨🏾", showIcon, content = "Moi", state, moiStyle }) => {
  return (
    <div className={`menu-table ${state}`}>
      <div className="moi" style={moiStyle}>
        {content}
      </div>
    </div>
  );
};

MenuTable.propTypes = {
  showEmoji: PropTypes.bool,
  emoji: PropTypes.string,
  showIcon: PropTypes.bool,
  content: PropTypes.string,
  state: PropTypes.oneOf(["primary", "secondary", "tertiary", "quaternary"]),
};
