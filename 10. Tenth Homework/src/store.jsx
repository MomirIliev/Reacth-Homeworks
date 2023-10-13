import { configureStore } from "@reduxjs/toolkit"; // za kreiranje na prodavnicata/store
import logger from "redux-logger"; // fiskalen aparat
import SayHelloReducer from "./reducers/SayHelloReducer"; // vraboteniot
import RaceWinnerReducer from "./reducers/RaceWinnerReducer";

const reducer = {
  //sojuz na rabotnici
  SayHelloReducer: SayHelloReducer,
  RaceWinnerReducer: RaceWinnerReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
