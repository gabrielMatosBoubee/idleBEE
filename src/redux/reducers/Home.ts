import { UNLOCK } from '../actions/Home';
import react from '../../assets/react.svg'
import HTML5 from '../../icons/html5.svg'
import CSS3 from '../../icons/css3.svg'
import javaScript from '../../icons/javaScript.svg'
import jest from '../../icons/jest.svg'
import Redux from '../../icons/redux.svg'

const inicialState = {
    cards: [
        {id: 0, icon: HTML5, 
        title: "HTML5", 
        value: "1C", 
        maxTime: 1, 
        type: "C",
        isUnlock: true, 
        unlockPrice: "0C", 
        level: 1, 
        levelUpPrice: "1C"},
        {id: 1, icon: CSS3, title: "CSS3", value: "5C", maxTime: 4, type: "Real", isUnlock: false, unlockPrice: "10C", level: 1, levelUpPrice: "10C"},
        {id: 2, icon: javaScript, title: "JavaScript", value: "15C", maxTime: 10, type: "Real", isUnlock: false, unlockPrice: "50C", level: 1, levelUpPrice: "50C"},
        {id: 3, icon: jest, title: "Jest", value: "25C", maxTime: 15, type: "Real", isUnlock: false, unlockPrice: "300C", level: 1, levelUpPrice: "300C"},
        {id: 4, icon: react, title: "React", value: "50C", maxTime: 18, type: "Real", isUnlock: false, unlockPrice: "1K", level: 1, levelUpPrice: "1K"},
        {id: 5, icon: Redux, title: "Redux", value: "200C", maxTime: 28, type: "K", isUnlock: false, unlockPrice: "10K", level: 1, levelUpPrice: "10K"},
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