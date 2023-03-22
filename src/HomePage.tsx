import React, { useState } from "react";
import { Banner } from "./component/Banner";
import Cards from "./component/Cards";
import Pagination from "./component/Pagination";
import SearchBox from "./component/SearchBoxes";

const HomePage = () => {
  const [searchStatusQuery, setSearchStatusQuery] = useState("");
  const [searchOriginalLaunchQuery, setSearchOriginalLaunchQuery] =
    useState("");
  const [searchTypeQuery, setSearchTypeQuery] = useState("");
  const CARDS_COUNT = 8;
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(CARDS_COUNT);
  return (
    <div>
      <Banner />
      <SearchBox
        setSearchStatusQuery={setSearchStatusQuery}
        setSearchOriginalLaunchQuery={setSearchOriginalLaunchQuery}
        setSearchTypeQuery={setSearchTypeQuery}
      />
      <Cards
        startValue={startValue}
        endValue={endValue}
        searchStatusQuery={searchStatusQuery}
        searchOriginalLaunchQuery={searchOriginalLaunchQuery}
        searchTypeQuery={searchTypeQuery}
      />
      <Pagination
        startValue={startValue}
        setStartValue={setStartValue}
        endValue={endValue}
        setEndValue={setEndValue}
        CARDS_COUNT={CARDS_COUNT}
      />
    </div>
  );
};
export default HomePage;
