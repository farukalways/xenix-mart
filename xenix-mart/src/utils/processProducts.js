import { sortProducts } from "./sortProducts";

export const processProducts = ({
  products,
  category,
  sortOption,
  page,
  limit,
}) => {
  let filtered = products;

  if (category) {
    filtered = filtered.filter((item) => item.category === category);
  }

  const sorted =
    sortOption && sortOption.trim() !== null
      ? sortProducts(filtered, sortOption)
      : filtered;

  const start = (page - 1) * limit;
  const end = page * limit;

  return sorted.slice(start, end);
};
