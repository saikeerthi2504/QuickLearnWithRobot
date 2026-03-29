import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchTerm = query.toLowerCase().trim();

    if (searchTerm === "python")       navigate("/Python");
    else if (searchTerm === "java")    navigate("/Java");
    else if (searchTerm === ".net")    navigate("/DotNet");
    else if (searchTerm === "home")    navigate("/Home");
    else if (searchTerm === "aboutus") navigate("/aboutus");
    else if (searchTerm === "contactus") navigate("/contactus");
    else if (searchTerm === "login")   navigate("/");
    else if (searchTerm === "signup")  navigate("/signup");
    else if (searchTerm === "c")       navigate("/C");
    else if (searchTerm === "oracle")  navigate("/Oracle");
    else if (searchTerm === "react")   navigate("/ReactResource");
    else if (searchTerm === "spring")  navigate("/SpringResources");
    else alert(`No page found for "${query}". Try: Python, Java, React, Spring…`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search topics…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>
        <span>Search</span>
      </button>
    </div>
  );
}

export default SearchBar;