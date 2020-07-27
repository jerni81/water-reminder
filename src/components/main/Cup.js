import React from "react";

const Cup = ({ cups }) => {
  return (
    <div className="card">
      <div className="cup">
        <div className="space" id="8"></div>

        <div className={cups >= 8 ? "blue fill" : "fill"} id="8"></div>
        <div className={cups >= 7 ? "blue fill" : "fill"} id="7"></div>
        <div className={cups >= 6 ? "blue fill" : "fill"} id="6"></div>
        <div className={cups >= 5 ? "blue fill" : "fill"} id="5"></div>
        <div className={cups >= 4 ? "blue fill" : "fill"} id="4"></div>
        <div className={cups >= 3 ? "blue fill" : "fill"} id="3"></div>
        <div className={cups >= 2 ? "blue fill" : "fill"} id="2"></div>
        <div className={cups >= 1 ? "blue fill" : "fill"}></div>
      </div>
    </div>
  );
};

export default Cup;
