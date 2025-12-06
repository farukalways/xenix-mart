// https://dummyjson.com/products

import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 15;

  useEffect(() => {
    let ignore = false;
    const fetchProducts = async () => {
      const skip = (page - 1) * limit;
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const result = await response.json();
      console.log(result);
      if (!ignore) return setProducts(result.products);
    };

    fetchProducts();

    return () => {
      ignore = true;
    };
  }, [page]);

  return (
    <section>
      {products.length === 0 ? (
        <h2>loading...</h2>
      ) : (
        <>
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="pt-8 pb-3 flex items-center justify-center gap-5">
            <button
              onClick={() => setPage((prev) => prev - 1)}
              className="px-4 py-2 text-[#000000] rounded"
            >
              Prev
            </button>
            <button className="px-4 py-2 text-[#000000] rounded">{page}</button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 text-[#000000] rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Products;
