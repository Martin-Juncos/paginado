import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    productsCopy: [],
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
      state.productsCopy = action.payload; // Inicializar productsCopy con todos los productos
    },
    updateProductsCopy: (state, action) => {
      state.productsCopy = action.payload;
    },
  },
});

export const { setAllProducts, updateProductsCopy } = productsSlice.actions;
export default productsSlice.reducer;
