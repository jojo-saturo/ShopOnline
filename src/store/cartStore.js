import {create} from "zustand"

const useCartStore = create((set) => ({
  cartAllProduct: [],

  setCartAllProduct: (products) =>
    set({ cartAllProduct: products }),

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cartAllProduct.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return {
          cartAllProduct: state.cartAllProduct.map((item) =>
            item.id === product.id
              ? { ...item, count: (item.count || 1) + 1 }
              : item
          ),
        };
      }

      return {
        cartAllProduct: [
          ...state.cartAllProduct,
          { ...product, count: 1 },
        ],
      };
    }),

  handleIncrement: (id) =>
    set((state) => ({
      cartAllProduct: state.cartAllProduct.map((product) =>
        product.id === id
          ? { ...product, count: (product.count || 1) + 1 }
          : product
      ),
    })),

  handleDecrement: (id) =>
    set((state) => ({
      cartAllProduct: state.cartAllProduct.map((product) =>
        product.id === id
          ? {
              ...product,
              count: Math.max(1, (product.count || 1) - 1),
            }
          : product
      ),
    })),

  handleDeleteItem: (id) =>
    set((state) => ({
      cartAllProduct: state.cartAllProduct.filter(
        (product) => product.id !== id
      ),
    })),
}));

export default useCartStore;