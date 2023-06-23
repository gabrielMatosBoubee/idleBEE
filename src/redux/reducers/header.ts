import { getYourMoney } from "../../utils/money";
import { ADDMONEY, ADDTYPE, ADDXP } from "../actions/header";

const inicialState = {
    moneyValue: "1C",
    xp: 0,
    walletMoney: {
      C: 1,
      K: 0,
      B: 0,
      T: 0,
      AA: 0,
      AB: 0,
      AC: 0,
      BA: 0,
      BB: 0,
      BC: 0,
      CA: 0,
      CB: 0,
      CC: 0,
      DA: 0,
  }
  };
  
  const header = (state = inicialState, action: any) => {
    switch (action.type) {
    case ADDMONEY :
      return ({
          ...state,
          moneyValue: getYourMoney(action.payload),
      });
    case ADDXP :
      return ({
        ...state,
        xp: state.xp + action.payload
      })
    case ADDTYPE: 
      return ({
        ...state,
        walletMoney: {
          ...state.walletMoney,
          [action.payload]: 0
        }
      })
    default:
      return state;
    }
  };
  
  export default header;