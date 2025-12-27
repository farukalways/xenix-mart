import { useEffect, useState } from "react";
import { ProductContext } from "../context";
import { processProducts } from "../utils/processProducts";
import { fetchData } from "../utils/fetchProducts";

const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState(null);
  const [showFilterBer, setShowFilterBer] = useState(false);
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

        //filter first
        const filteredProducts = selectedCategory
          ? allProduct.filter(
              (item) =>
                item.category?.toLowerCase().trim() ===
                selectedCategory.toLowerCase().trim()
            )
          : allProduct;

        // sort + paginate
        const paginatedProducts = processProducts({
          products: filteredProducts,
          sortOption: selectedSortOption,
          page,
          limit,
        });

        if (!ignore) {
          setProducts(paginatedProducts);
          setTotleProductsCount(filteredProducts.length);
          setError(filteredProducts.length === 0 ? "No data available" : null);
        }
      } catch (err) {
        if (!ignore) setError(err.message);
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
