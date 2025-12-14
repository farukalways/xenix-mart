import { useEffect, useState } from "react";
import { ProductContext } from "../context";
import { processProducts } from "../utils/processProducts";
import { fetchData } from "../utils/fetchProducts";

const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState(null);
  const [showFilterBer, setShowFilterBer] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totleProductsCount, setTotleProductsCount] = useState(0);
  const [error, setError] = useState(null);
  const limit = 15;
  const totalPages = Math.ceil(totleProductsCount / limit);

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      try {
        const allProduct = await fetchData("http://localhost:3000/products");

        const paginatedProducts = processProducts({
          products: allProduct,
          category: selectedCategory,
          sortOption: selectedSortOption,
          page,
          limit,
        });

        if (!ignore) {
          if (paginatedProducts.length === 0) {
            setProducts([]);
            setError("No data available");
            setTotleProductsCount(0);
          } else {
            setProducts(paginatedProducts);
            setTotleProductsCount(paginatedProducts.length);
            setError(null);
          }
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
  }, [page, selectedCategory, selectedSortOption]);

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedSortOption(null);
    setPage(1);
  };

  const value = {
    selectedCategory,
    selectedSortOption,
    setSelectedCategory,
    setSelectedSortOption,
    showFilterBer,
    setShowFilterBer,
    selectedProduct,
    setSelectedProduct,
    products,
    setPage,
    page,
    totalPages,
    error,
    handleClearFilters,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
