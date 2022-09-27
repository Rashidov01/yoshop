import React from "react";

export default function Btn({ text, styles }) {
  return (
    <div className="button">
      <button className="primary-button" style={styles}>
        {text}
      </button>
    </div>
  );
}
