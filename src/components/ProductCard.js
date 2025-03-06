import LazyLoad from "react-lazyload";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <LazyLoad height={100} offset={100}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
  />
      </LazyLoad>
      <h3 className="mt-2 font-bold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
