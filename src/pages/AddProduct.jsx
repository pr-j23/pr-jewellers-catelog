import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useProducts } from "../utils";

export default function AddProduct() {
  const initialVal = {
    name: "",
    description: "",
    image: "https://via.placeholder.com/200",
    weight: "",
    category: "",
  };
  const [product, setProduct] = useState(initialVal);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if not admin
  if (!user || user.role !== "admin") {
    navigate("/");
    return null;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setProduct({ ...product, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const isFormValid = () => {
    return (
      product.name && product.description && product.weight && product.category
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // addProduct({
      //   ...product,
      // });
      toast.success("Product added successfully!");
      setProduct(initialVal);
      navigate("/");
    } else {
      toast.error("Please fill in all details.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            required
            placeholder="Enter product name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            required
            placeholder="Enter product description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {preview && (
            <img src={preview} alt="Preview" className="mt-4 w-full h-auto" />
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Weight
          </label>
          <input
            type="text"
            required
            placeholder="Enter product weight"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={product.weight}
            onChange={(e) => setProduct({ ...product, weight: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            required
            placeholder="Enter product category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
        </div>  
        <button
          type="submit"
          className={`bg-purple-600 hover:bg-purple-700 transition-colors text-white font-bold py-2 px-4 rounded-md ${
            !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isFormValid()}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
