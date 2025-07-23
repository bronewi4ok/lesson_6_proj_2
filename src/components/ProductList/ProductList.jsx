import React from 'react'
import GridRow from '../GridRow/GridRow'

function ProductList({ filteredProducts }) {
  return (
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((prod) => (
          <GridRow
            key={prod.id}
            name={prod.name}
            price={prod.price}
            url={prod.imageUrl}
          />
        ))
      ) : (
        <p>The list is empty for now</p>
      )}
    </>
  )
}

export default React.memo(ProductList)
