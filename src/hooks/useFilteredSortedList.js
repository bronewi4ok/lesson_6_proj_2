import { useDeferredValue, useMemo } from 'react';

function useFilteredSortedList(products, searchValue, sortOrder) {
  const deferredSearchValue = useDeferredValue(searchValue);

  return useMemo(() => {
    const query = deferredSearchValue.trim().toLowerCase();

    const filtered = query ? products.filter((prod) => prod.name.toLowerCase().includes(query)) : products;

    const sorted =
      sortOrder === 'price_up'
        ? [...filtered].sort((a, b) => a.price - b.price)
        : sortOrder === 'price_down'
        ? [...filtered].sort((a, b) => b.price - a.price)
        : filtered;

    return sorted;
  }, [products, deferredSearchValue, sortOrder]);
}

export default useFilteredSortedList;
