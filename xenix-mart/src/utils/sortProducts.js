import { sortMap } from "../data/productCategory";

export const sortProducts = (products, selectedSortOption) => {
  if (!selectedSortOption) return products;

  const { field, order } = sortMap[selectedSortOption];

  return [...products].sort((a, b) => {
    let valA = a[field];
    let valB = b[field];

    if (typeof valA === "string") {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }

    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });
};
