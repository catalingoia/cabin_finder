import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Search from "./Search";
function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Lorem ipsum dolor sit amet</h1>
        <h5>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
