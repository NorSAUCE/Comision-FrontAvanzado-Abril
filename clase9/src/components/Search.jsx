// src/components/Search.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for products" 
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(item => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
