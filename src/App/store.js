import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cryptoApi } from "../Services/CryptoAPI";
import { newsApi } from "../Services/CryptoNewsAPI";
const store = configureStore({
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware),
});
setupListeners(store.dispatch);
export default store;
