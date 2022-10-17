import { Card } from "../utils/interfaces";

const ProductCard = ({ card }: Card) => {
  return (
    <div className="w-auto inline-block mb-4 cursor-pointer">
      <img src="/shoe1.webp" alt="Shoe 1" className="w-80 h-80" />
      <h3 className="text-black font-semibold mt-4">{card.name}</h3>
      <p className="text-gray-600">{card.category}</p>
      <p className="text-black">₹ {card.price}</p>
    </div>
  );
};

export default ProductCard;
