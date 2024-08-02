import React, { useState } from "react";
import Banner from "../Banner";
import AllDonation from "../AllDonation/AllDonation";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    setSearchValue(search);
  };
  return (
    <>
      <Banner setSearch={setSearch} handleSearch={handleSearch} />
      <AllDonation searchValue={searchValue} />
    </>
  );
};

export default Home;
