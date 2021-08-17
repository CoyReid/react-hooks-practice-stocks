import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStonks, removeStonk}) {
  
  const allMyStonks = myStonks.map((stonk) => <Stock key={stonk.id} stonk={stonk} stonkClicked={removeStonk}/>)
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {allMyStonks}
    </div>
  );
}

export default PortfolioContainer;
