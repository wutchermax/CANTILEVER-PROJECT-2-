import React, { useState } from 'react';

function Filter({ setCategory, setQuery }) {
  const [localCategory, setLocalCategory] = useState('');
  const [localQuery, setLocalQuery] = useState('');

  const handleSearch = () => {
    setCategory(localCategory);
    setQuery(localQuery);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search"
        value={localQuery}
        onChange={e => setLocalQuery(e.target.value)}
      />
      <select value={localCategory} onChange={e => setLocalCategory(e.target.value)}>
        <option value="">All</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Filter;
