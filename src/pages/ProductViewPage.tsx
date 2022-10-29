import { useParams } from 'react-router-dom';
import useProductStore from '../stores/productStore';
import { cardData } from '../interfaces/data';
import { Product } from '../interfaces/interfaces';

const ProductViewPage = () => {
  const { productId } = useParams();
  const { addToCart } = useProductStore();

  const currentProduct = cardData.find(
    (prod) => prod?.id === Number(productId)
  );

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div>
      <div className="container mx-auto px-4 md:px-0 mt-6">
        <div className="md:flex gap-4">
          <img src={currentProduct?.imgUrl} alt="Shoe 1" className="md:w-3/5" />

          <div className="mt-4 md:mt-0 md:w-2/5">
            <h1 className="text-2xl">{currentProduct?.name}</h1>
            <p className="text-lg">{currentProduct?.category}</p>

            <p className="mt-4 text-lg font-semibold">
              MRP : ₹{currentProduct?.price}
            </p>
            <p className="text-gray-600">incl. of taxes</p>
            <p className="text-gray-600">
              (Also includes all applicable duties)
            </p>

            <div className="flex flex-col space-y-3 mt-3">
              <a
                href="#"
                className="bg-black/95 hover:bg-black/60 text-white text-center p-4 rounded-full"
                onClick={() => handleAddToCart(currentProduct as Product)}
              >
                Add to Bag
              </a>
              <a
                href="#"
                className="border-2 hover:border-black text-center p-4 rounded-full"
              >
                Favourite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
