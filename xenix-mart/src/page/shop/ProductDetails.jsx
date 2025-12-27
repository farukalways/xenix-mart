import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
// import ReviewSlider from "./ReviewSlider";

const ProductDetails = () => {
  const { id } = useParams();
  const nagigate = useNavigate();
  const [qty, setQty] = useState(1);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  if (!product) return <p>Product not found</p>;

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    // reviews,
    returnPolicy,
    minimumOrderQuantity,
    meta,
    images,
    thumbnail,
  } = product;

  const discountedPrice = Math.round(
    price - (price * discountPercentage) / 100
  );
  const finalPriceBDT = Math.round(discountedPrice * 120);

  return (
    <section className=" w-10/12 mx-auto text-black">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={images?.[0] || thumbnail}
            alt={title}
            className="w-full max-w-md rounded-xl bg-gray-100 p-4"
          />

          <div className="flex gap-4">
            <img src={thumbnail} className="w-20 h-20 bg-gray-100 rounded" />
            <img src={meta.qrCode} className="w-20 h-20" />
          </div>

          <p className="text-sm text-gray-500">Barcode: {meta.barcode}</p>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="text-gray-600 capitalize">Category: {category}</p>

          <p className="text-sm">SKU: {sku}</p>

          <div className="flex gap-3 flex-wrap">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p>⭐ {rating} Rating</p>

          <p className="text-green-600 font-medium">
            {availabilityStatus} ({stock} in stock)
          </p>

          <p className="text-xl">
            <span className="line-through text-gray-400 mr-2">
              ৳ {Math.round(price * 120)}
            </span>
            <span className="font-semibold">৳ {finalPriceBDT}</span>
            <span className="text-sm text-red-500 ml-2">
              ({discountPercentage}% OFF)
            </span>
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="px-4 py-2 border rounded"
            >
              −
            </button>

            <span className="font-semibold">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="px-4 py-2 border rounded"
            >
              +
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Minimum order: {minimumOrderQuantity}
          </p>

          <button className="bg-black text-white py-3 rounded-lg w-full">
            Add to Cart
          </button>

          <div className="text-sm space-y-1 text-gray-600">
            <p>🚚 {shippingInformation}</p>
            <p>🛡 {warrantyInformation}</p>
            <p>↩️ {returnPolicy}</p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* SPECIFICATIONS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>Weight: {weight}kg</div>
        <div>Width: {dimensions.width}</div>
        <div>Height: {dimensions.height}</div>
        <div>Depth: {dimensions.depth}</div>
      </div>

      {/* REVIEWS */}
      {/* <div>
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

        <ReviewSlider reviews={reviews} />
      </div> */}

      <button onClick={() => nagigate(-1)}>Back</button>
    </section>
  );
};

export default ProductDetails;
