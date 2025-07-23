import React from 'react'

function SearchBar({ searchValue, onSearch, sortOrder, onSort }) {
  return (
    <div>
      <input
        placeholder="Search"
        type="text"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        value={sortOrder}
        onChange={(e) => onSort(e.target.value)}>
        <option value="">Оберіть сортування</option>
        <option value="price_up"> Ціна ↑</option>
        <option value="price_down">Ціна ↓</option>
      </select>
    </div>
  )
}

export default React.memo(SearchBar)
