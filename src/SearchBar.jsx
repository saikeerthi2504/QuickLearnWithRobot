import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a Search component to use useNavigate
function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Convert input to lowercase for simplicity
    const searchTerm = query.toLowerCase();

    // Navigate to the matching page
    if (searchTerm === "python") navigate("/Python");
    else if (searchTerm === "java") navigate("/Java");
    else if (searchTerm === ".net") navigate("/DotNet");
    else if (searchTerm === "home") navigate("/");
    else if (searchTerm === "aboutus") navigate("/aboutus");
    else if (searchTerm === "contactus") navigate("/contactus");
    else if (searchTerm === "login") navigate("/login");
    else if (searchTerm === "signup") navigate("/signup");
    else if (searchTerm === "c") navigate("/C");
    else if (searchTerm === "oracle") navigate("/Oracle");
    else if (searchTerm === "react") navigate("/ReactResource");
    else if (searchTerm === "spring") navigate("/SpringResources");
    else alert("Page not found!");
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button style={{ borderRadius: "10px" }} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;