import { useState } from "react";
import FormInput from "../components/FormInput ";
import FormTextarea from "../components/FormTextarea";

const ProductAddForm = () => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    tags: "",
    brand: "",
    thumbnail: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // 🔹 input change handler
  const handleChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 🔹 submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // tags string → array
    const preparedData = {
      ...formData,

      price: Number(formData.price),
      discountPercentage: Number(formData.discountPercentage),
      rating: Number(formData.rating),
      stock: Number(formData.stock),
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preparedData),
      });

      if (!res.ok) {
        throw new Error("Product add failed");
      }

      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        tags: "",
        brand: "",
        thumbnail: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 text-[#000000] bg-white rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <h2 className="md:col-span-2 text-xl font-semibold">Add New Product</h2>

      <FormInput
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <FormInput
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <FormInput
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleChange}
      />

      <FormInput
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <FormInput
        name="discountPercentage"
        type="number"
        placeholder="Discount %"
        value={formData.discountPercentage}
        onChange={handleChange}
      />

      <FormInput
        name="rating"
        type="number"
        placeholder="Rating"
        value={formData.rating}
        onChange={handleChange}
      />

      <FormInput
        name="stock"
        type="number"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
      />

      <FormInput
        name="thumbnail"
        placeholder="Thumbnail URL"
        value={formData.thumbnail}
        onChange={handleChange}
      />

      <FormTextarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="md:col-span-2"
      />

      <FormInput
        name="tags"
        placeholder="Tags (comma separated)"
        value={formData.tags}
        onChange={handleChange}
        className="md:col-span-2"
      />

      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 bg-black text-white py-2 rounded"
      >
        {loading ? "Saving..." : "Add Product"}
      </button>

      {error && <p className="md:col-span-2 text-red-500">{error}</p>}

      {success && (
        <p className="md:col-span-2 text-green-600">
          Product added successfully ✅
        </p>
      )}
    </form>
  );
};

export default ProductAddForm;
