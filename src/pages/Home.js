import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <ProductList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;