// https://dummyjson.com/products

import { useEffect, useState } from "react";
import Product from "./Product";
import ProductLoadingAnimation from "../../components/ProductLoadingAnimation";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const limit = 15;

  useEffect(() => {
    let ignore = false;

    const fetchProducts = async () => {
      try {
        const skip = (page - 1) * limit;
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (!ignore) {
          setProducts(result.products);
          setError(null); // clear previous error
        }
      } catch (err) {
        if (!ignore) setError(err.message);
      }
    };

    fetchProducts();

    return () => {
      ignore = true;
    };
  }, [page, setError]);

  console.log(error);

  return (
    <section>
      {error ? (
        <p className="text-xl text-red-500 w-full min-h-72 flex items-center justify-center">
          {error}
        </p>
      ) : products.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Array.from({ length: 15 }).map((_, idx) => (
            <ProductLoadingAnimation key={idx} />
          ))}
        </div>
      ) : (
        <>
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          {products.length > 0 && (
            <div className="pt-8 pb-3 flex items-center justify-center gap-5">
              <button
                onClick={() => setPage((prev) => prev - 1)}
                className="px-4 py-2 text-[#000000] rounded"
              >
                Prev
              </button>
              <button className="px-4 py-2 text-[#000000] rounded">
                {page}
              </button>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="px-4 py-2 text-[#000000] rounded"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Products;
