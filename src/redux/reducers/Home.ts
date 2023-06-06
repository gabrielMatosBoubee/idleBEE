import { UNLOCK } from '../actions/Home';
import react from '../../assets/react.svg'

const inicialState = {
    cards: [
        {id: 1, icon: react, title: "React", value: 1, maxTime: 3, type: "Real", isUnlock: true, unlockPrice: 10},
        {id: 2, icon: react, title: "React", value: 1, maxTime: 4, type: "Real", isUnlock: false, unlockPrice: 10},
    ],
  };
  
  const Home = (state = inicialState, action: any) => {
    switch (action.type) {
    case UNLOCK :
      return ({
        ...state,
        cards: action.payload
      })
    default:
      return state;
    }
  };
  
  export default Home;