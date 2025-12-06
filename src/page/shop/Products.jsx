// https://dummyjson.com/products

import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      if (!ignore) return setProducts(result.products);
    };

    fetchProducts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
