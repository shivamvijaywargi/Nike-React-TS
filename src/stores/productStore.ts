import create from "zustand";
import { combine } from "zustand/middleware";
import { Product } from "../utils/interfaces";

interface ProductsStore {
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

// const useProductStore = create(
//   combine({ products: [] }, (set) => ({
//     addToCart: (product: Product) => {
//       set((state) => ({ products: [...state.products, product] }));
//     },
//     removeFromCart: (productId: number) => {
//       set((state) => ({
//         products: state.products.filter((product) => productId !== product.id),
//       }));
//       // console.log(typeof state);
//     },
//   }))
// );

const useProductStore = create<ProductsStore>((set) => ({
  // Initial State
  products: [],
  addToCart: (product: Product) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },
  removeFromCart: (productId: number) => {
    set((state) => ({
      products: state.products.filter((product) => productId !== product.id),
    }));
    // console.log(typeof state);
  },
}));
export default useProductStore;
