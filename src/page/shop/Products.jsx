import { useEffect, useState } from "react";
import Product from "./Product";
import ProductLoadingAnimation from "../../components/ProductLoadingAnimation";
import Pagination from "../../components/Pagination";
import { fetchProducts } from "./../../utils/fetchProducts";
import { processProducts } from "../../utils/processProducts";

const Products = ({ onSelectedCategory, selectedSortOption }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totleProductsCount, setTotleProductsCount] = useState(0);
  const [error, setError] = useState(null);
  const limit = 15;
  const totalPages = Math.ceil(totleProductsCount / limit);

  // const handleClearFilters = () => {
  //   onSelectedCategory(null);
  //   onSelectedSortOption(null);
  //   setPage(1);
  // };

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      try {
        const allProduct = await fetchProducts(
          "https://dummyjson.com/products?limit=0"
        );

        const paginatedProducts = processProducts({
          products: allProduct,
          category: onSelectedCategory,
          sortOption: selectedSortOption,
          page,
          limit,
        });

        if (!ignore) {
          setProducts(paginatedProducts);
          setTotleProductsCount(paginatedProducts.length);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      }
    };

    loadData();

    return () => {
      ignore = true;
    };
  }, [page, onSelectedCategory, selectedSortOption]);

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
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </section>
  );
};

export default Products;
