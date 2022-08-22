import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import toggleSlice from "./toggle-slice";
import uiSlice from "./ui-slice";

const store=configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui:uiSlice.reducer,
        toggle:toggleSlice.reducer,

    }
})
export default store;