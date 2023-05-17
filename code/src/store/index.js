import { configureStore } from "@reduxjs/toolkit";
import varifyReducer from "./VarifyCourse";

const store = configureStore({
    reducer : {varify: varifyReducer}
})

export default store;