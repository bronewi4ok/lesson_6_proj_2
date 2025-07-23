import React from 'react'
import styles from './GridRow.module.scss'

function GridRow({ id, name, price, url }) {
  return (
    <div
      key={id}
      className={styles.gridRow}>
      <img
        className={styles.gridRow__picture}
        src={url}
        alt={name}
      />
      <div>
        <h3>{name}</h3>
        <p>Price: {price}</p>
      </div>
    </div>
  )
}

export default React.memo(GridRow)
