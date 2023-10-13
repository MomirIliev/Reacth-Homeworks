const initialState = {
  carRace: "Porsche",
  formulaOneRace: "Merzedes",
};

const RaceWinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAR":
      return {
        ...state,
        carRace: action.payload,
      };

    case "FORMULA_ONE":
      return {
        ...state,
        formulaOneRace: action.payload,
      };

    default:
      return state;
  }
};

export default RaceWinnerReducer;
