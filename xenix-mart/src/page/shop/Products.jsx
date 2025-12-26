import Product from "./Product";
import ProductLoadingAnimation from "../../components/ProductLoadingAnimation";
import Pagination from "../../components/Pagination";
import useProduct from "../../hooks/useProduct";

const Products = () => {
  const {
    showFilterBer,
    setShowFilterBer,
    setSelectedProductId,
    error,
    products,
    setPage,
    page,
    totalPages,
  } = useProduct();

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
          <p
            onClick={() => setShowFilterBer(!showFilterBer)}
            className="w-full md:hidden text-[#000000] cursor-pointer px-2 py-3 mb-3 text-xl font-semibold "
          >
            Filterd
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 min-h-[90vh] bg-[#f3fab5]">
            {products.map((product) => (
              <Product
                onOpen={() => setSelectedProductId(product.id)}
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </section>
  );
};

export default Products;
