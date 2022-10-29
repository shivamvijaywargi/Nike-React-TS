import { cardData } from '../interfaces/data';
import { Card } from '../interfaces/interfaces';
import ProductCard from './ProductCard';

const ProductCards = () => {
  return (
    <div className="mt-8 container mx-auto p-4 md:p-0">
      <h2 className="text-2xl">AF1 Highlights</h2>
      <div className="overflow-x-scroll scroll whitespace-nowrap space-x-4 mt-2">
        {/* Product Card */}
        {cardData.map((card: Card) => (
          // <div className="" key={card.id}>
          <ProductCard card={card} key={card.id} />
          // </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
