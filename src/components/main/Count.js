import React from "react";

const Count = ({ cups }) => {
  return (
    <div className="card">
      {cups < 8 ? (
        <h1>{cups} of 8 cups of water today!</h1>
      ) : (
        <h1>You're Hydrated!</h1>
      )}
    </div>
  );
};

export default Count;
