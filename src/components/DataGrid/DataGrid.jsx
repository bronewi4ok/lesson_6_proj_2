import { useCallback, useState } from 'react'
import useFilteredSortedList from '../../hooks/useFilteredSortedList.js'
import { useProducts } from '../../hooks/useProducts'
import ProductList from '../ProductList/ProductList.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './DataGrid.module.scss'

function DataGrid() {
  const { products, error, loading } = useProducts()
  const [searchValue, setSearchValue] = useState('')
  const [sortOrder, setSortOrder] = useState('')

  const filteredProducts = useFilteredSortedList(
    products,
    searchValue,
    sortOrder,
  )

  const handleSearch = useCallback((value) => {
    setSearchValue(value)
  }, [])

  const handleSort = useCallback((value) => {
    setSortOrder(value)
  }, [])

  return (
    <div>
      {/* HEADER */}
      <div className={styles.dataGrid__header}>
        <h1>Sort and Filter with hooks</h1>
        <SearchBar
          searchValue={searchValue}
          onSearch={handleSearch}
          sortOrder={sortOrder}
          onSort={handleSort}
        />
      </div>

      {/* Search list */}
      <div className={styles.dataGrid__row}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <ProductList filteredProducts={filteredProducts} />
      </div>
    </div>
  )
}

export default DataGrid
