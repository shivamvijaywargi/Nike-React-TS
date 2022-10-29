import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../interfaces/interfaces';

interface ProductsStore {
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

// const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
// const setLocalStorage = (key, value) =>
//   localStorage.setItem(key, JSON.stringify(value));

// Without localstorage
// const useProductStore = create<ProductsStore>((set) => ({
//   // Initial State
//   products: [],
//   addToCart: (product: Product) =>
//     set((state) => ({ products: [...state.products, product] })),

//   removeFromCart: (productId: number) => {
//     set((state) => ({
//       products: state.products.filter((product) => productId !== product.id),
//     }));
//     // console.log(typeof state);
//   },
// }));

// With local storage - not working as of now
const useProductStore = create<ProductsStore>()(
  persist(
    (set, get) => ({
      // Initial State
      products: [],
      addToCart: (product: Product) =>
        set({ products: [...get().products, product] }),
      removeFromCart: (productId: number) => {
        set({
          products: get().products.filter(
            (product) => productId !== product.id
          ),
        });
      },
    }),
    {
      name: 'products',
    }
  )
);

export default useProductStore;
