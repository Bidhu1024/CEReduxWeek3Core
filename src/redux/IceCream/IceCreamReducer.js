import { BUYICE } from "./IceCreamConstant";

const initialState = {
  numOfIce: 10,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUYICE:
      return {
        ...state,
        numOfIce: state.numOfIce - 1
      };
    default:
      return state
  }
};
export default IceCreamReducer;
