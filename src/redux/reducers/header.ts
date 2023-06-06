import { ADDMONEY, ADDXP } from "../actions/header";

const inicialState = {
    moneyValue: 1,
    xp: 0
  };
  
  const header = (state = inicialState, action: any) => {
    switch (action.type) {
    case ADDMONEY :
      return ({
          ...state,
          moneyValue: Number(state.moneyValue) + Number(action.payload),
      });
    case ADDXP :
      return ({
        ...state,
        xp: state.xp + action.payload
      })
    default:
      return state;
    }
  };
  
  export default header;