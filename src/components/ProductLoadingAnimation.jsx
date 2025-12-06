const ProductLoadingAnimation = () => {
  return (
    <div className="card p-0 w-auto shadow-sm">
      {/* Image Skeleton */}
      <figure className="bg-gray-300 rounded-xl relative overflow-hidden h-48 w-full">
        <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
      </figure>

      <div className="card-body py-5 px-2 flex flex-col justify-between items-start text-center w-full">
        {/* Title & Price Skeleton */}
        <div className="flex items-center gap-4 w-full">
          <div className="h-5 rounded bg-gray-300 flex-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>
          <div className="h-5 rounded bg-gray-300 flex-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="mt-4 w-full flex justify-start">
          <div className="h-8 w-32 rounded bg-gray-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoadingAnimation;
