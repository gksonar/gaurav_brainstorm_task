import React, { useState } from "react";
import { Banner } from "./component/Banner";
import SearchBox from "./component/SearchBoxes";

const HomePage = () => {
  const [searchStatusQuery, setSearchStatusQuery] = useState("");
  const [searchOriginalLaunchQuery, setSearchOriginalLaunchQuery] =
    useState("");
  const [searchTypeQuery, setSearchTypeQuery] = useState("");
  return (
    <div>
      <Banner />
      <SearchBox
        setSearchStatusQuery={setSearchStatusQuery}
        setSearchOriginalLaunchQuery={setSearchOriginalLaunchQuery}
        setSearchTypeQuery={setSearchTypeQuery}
      />
    </div>
  );
};
export default HomePage;
