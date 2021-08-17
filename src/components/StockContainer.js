import React  from "react";
import Stock from "./Stock";

function StockContainer({stonks, addStonk}) {
  
  const allStonks = stonks.map((stonk) => <Stock key={stonk.id} stonk={stonk} stonkClicked={addStonk}/>)
  
  return (
    <div>
      <h2>Stocks</h2>
      {allStonks}
    </div>
  );
}

export default StockContainer;
