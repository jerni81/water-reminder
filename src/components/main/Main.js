import React, { useState } from "react";
import Timer from "./Timer";
import Count from "./Count";
import Cup from "./Cup";

const Main = ({ showNotification }) => {
  const [cups, setCups] = useState(0);
  
  return (
    <div className="main">
      <Timer cups={cups} setCups={setCups} showNotification={showNotification}/>
      <Cup cups={cups} />
      <Count cups={cups} />
    </div>
  );
};

export default Main;
