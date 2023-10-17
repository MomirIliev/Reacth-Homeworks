import { BUY_CAKE, RESTOCK_CAKES } from "../constants/CakeConstants";

const initialState = {
  cakes: 10,
  message: undefined,
  //message:undefined ->
  //da se dodade varijabla koja koga
  //ke se klikne poveke torti
  //nego sto ima da priakze poraka za greska
  //pr. klik na buy 3 cakes a ima samo 2
  // message: Not Enough cakes. Only 2 cakes left
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      if (state.cakes >= action.payload) {
        return {
          ...state,
          cakes: state.cakes - action.payload, // 1
          message: state.cakes,
        };
      } else {
        const message = `${state.cakes}`;
        alert(`Not enough cakes. Only ${message} left in stock.`);
        return {
          ...state,
          cakes: state.cakes,
          message: message,
        };
      }
    }
    case RESTOCK_CAKES:
      return {
        ...state,
        cakes: state.cakes + action.payload,
        // cakes: parseInt(state.cakes) + parseInt(action.payload),
      };

    default:
      return state;
  }
};

export default CakeReducer;
