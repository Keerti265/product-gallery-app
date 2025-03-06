import { useState, useEffect, useContext } from "react"; 
import { useDebounce } from "../hooks/useDebounce";
import { ThemeContext } from "../context/ThemeContext";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div className="flex justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={toggleTheme} className="p-2 bg-blue-500 text-white rounded">
        Toggle Theme
      </button>
    </div>
  );
};

export default SearchBar;
