import { sortProducts } from "./sortProducts";
export const processProducts = ({
  products = [],
  category,
  sortOption,
  page = 1,
  limit = 10,
}) => {
  console.log(category);
  let filtered = products;

  if (category && typeof category === "string") {
    filtered = filtered.filter(
      (item) =>
        item.category?.toLowerCase().trim() === category.toLowerCase().trim()
    );
  }

  const sorted =
    sortOption && sortOption.trim() !== ""
      ? sortProducts(filtered, sortOption)
      : filtered;

  const start = (page - 1) * limit;
  const end = page * limit;

  return sorted.slice(start, end);
};
