import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { fetcherApi } from "./fetcherApi";

const store = configureStore({
  reducer: {
    [fetcherApi.reducerPath]: fetcherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetcherApi.middleware),
});
setupListeners(store.dispatch);

export default store;
