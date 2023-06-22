/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ChevronUp } from "../../icons/ChevronUp";
import "./style.css";

export const InputDropdown = ({
  showDescription = true,
  show = true,
  showAddEmoji = true,
  showChevron = true,
  addSub = "+",
  showAddSub = true,
  description = "Jaugez l’impact de ce driver sur votre problématique.",
  emoji = "🏎",
  content = "Ajouter un driver",
  state,
  style,
  icon = (
    <ChevronDown1
      style={{
        height: "16px",
        minWidth: "16px",
        position: "relative",
      }}
    />
  ),
  inputChampsStyle,
  ajouterUnDriverStyle,
}) => {
  return (
    <div className={`input-dropdown state-0-${state}`} style={style}>
      {showAddEmoji && (
        <div className="add">
          {show && <div className="element">{emoji}</div>}

          {showAddSub && <div className="text-wrapper">{addSub}</div>}
        </div>
      )}

      <div className="input-champs" style={inputChampsStyle}>
        {["default", "filled"].includes(state) && (
          <>
            <div className="ajouter-un-driver" style={ajouterUnDriverStyle}>
              {content}
            </div>
            <>{showChevron && <>{icon}</>}</>
          </>
        )}

        {state === "drop-down" && (
          <>
            <div className="div" style={ajouterUnDriverStyle}>
              <div className="frame-2">
                <div className="ajouter-un-driver-2">{content}</div>
                {showChevron && (
                  <ChevronUp
                    style={{
                      height: "16px",
                      minWidth: "16px",
                      position: "relative",
                    }}
                  />
                )}
              </div>
              {showDescription && <p className="jaugez-l-impact-de">{description}</p>}
            </div>
            <div className="progressbar-drivers">
              <div className="overlap">
                <img
                  className="line"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/d88abf5f45b4d65148140dbabab3f70c/img/line-2.svg"
                />
                <div className="chips-state-driver">
                  <div className="overlap-group">
                    <div className="ellipse" />
                    <div className="i">🪶</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

InputDropdown.propTypes = {
  showDescription: PropTypes.bool,
  show: PropTypes.bool,
  showAddEmoji: PropTypes.bool,
  showChevron: PropTypes.bool,
  addSub: PropTypes.string,
  showAddSub: PropTypes.bool,
  description: PropTypes.string,
  emoji: PropTypes.string,
  content: PropTypes.string,
  state: PropTypes.oneOf(["drop-down", "filled", "default"]),
};
