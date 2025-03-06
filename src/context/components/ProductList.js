import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to load products. Try again later.");
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Filter and limit the products to 3 columns x 4 rows = 12 products
  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 12);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
