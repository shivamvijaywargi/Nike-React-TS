import { Link } from "react-router-dom";
import { Card } from "../utils/interfaces";

const ProductCard = ({
  card: { name, category, price, imgUrl, id },
}: {
  card: Card;
}) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="w-auto inline-block mb-4 cursor-pointer">
        <img src={imgUrl} alt="Shoe 1" className="w-80 h-80" />
        <h3 className="text-black font-semibold mt-4">{name}</h3>
        <p className="text-gray-600">{category}</p>
        <p className="text-black">₹ {price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
