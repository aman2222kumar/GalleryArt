import { configureStore } from "@reduxjs/toolkit";

import reducer_data from "./dataReducer";

const store = configureStore({
  reducer: {
    apiData: reducer_data,
  },
});

export default store;
