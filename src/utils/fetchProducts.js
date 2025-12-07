export const fetchProducts = async ({ category, page, limit }) => {
  let url = "";
  let isCategory = false;

  if (category) {
    url = `https://dummyjson.com/products/category/${category}`;
    isCategory = true;
  } else {
    const skip = (page - 1) * limit;
    url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  if (isCategory) {
    return {
      products: data.products.slice((page - 1) * limit, page * limit),
      total: data.products.length,
    };
  } else {
    return {
      products: data.products,
      total: data.total,
    };
  }
};
