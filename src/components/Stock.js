import React from "react";

function Stock({stonk, stonkClicked}) {
  
  function handleStonkClick() {
    stonkClicked(stonk)
  }

  return (
    <div>
      <div className="card" onClick={handleStonkClick}>
        <div className="card-body">
          <h5 className="card-title">{stonk.name}</h5>
          <p className="card-text">{stonk.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
