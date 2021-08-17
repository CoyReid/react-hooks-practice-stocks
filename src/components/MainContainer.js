import React, { useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  
  const [stonks, setStonks] = useState([]);
  const [myStonks, setMyStonks] = useState([]);
  const [sortStonks, setSortStonks] = useState("All");
  const [filterStonks, setFilterStonks] = useState("All");

  useEffect(() => { fetch("http://localhost:3001/stocks").then(res => res.json()).then(setStonks) }, [])

  function addStonk(newStonk) {
    const stonkToAdd = myStonks.find((stonk) => stonk.id === newStonk.id);
    if (!stonkToAdd) return setMyStonks([...myStonks, newStonk])
  }

  function removeStonk(oldStonk) {
    setMyStonks((myStonks) => myStonks.filter((stonk) => stonk.id !== oldStonk.id))
  }

  const sortedStonks = [...stonks].sort((a, b) => {
    if (sortStonks === "Alphabetically") {
      return a.name.localeCompare(b.name);
    } else if (sortStonks === "PriceLow") {
      return a.price - b.price;
    } else if (sortStonks === "PriceHigh") {
      return b.price - a.price;
    }
    return 0;
  })

  const filteredStonks = sortedStonks.filter((stonk) => {
    if (filterStonks === "All") {
      return true;
    } else if (filterStonks === "Tech" && stonk.type === "Tech") {
      return true;
    } else if (filterStonks === "Sportswear" && stonk.type === "Sportswear") {
      return true;
    } else if (filterStonks === "Finance" && stonk.type === "Finance") {
      return true;
    }
    return 0;
  });
  
  return (
    <div>
      <SearchBar sortStonks={sortStonks} setSortStonks={setSortStonks} filterStonks={filterStonks} setFilterStonks={setFilterStonks}/>
      <div className="row">
        <div className="col-8" id="stocks">
          <StockContainer stonks={filteredStonks} addStonk={addStonk}/>
        </div>
        <div className="col-4" id="portfolio">
          <PortfolioContainer myStonks={myStonks} removeStonk={removeStonk}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
