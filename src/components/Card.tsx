import React, { useEffect, useReducer, useState } from 'react';
import { addMoney } from '../redux/actions/header';
import style from '../styles/Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import cadeado from '../icons/cadeado-8bits-removebg.png'
import { IGlobalState } from '../interfaces/redux';
import { unlock } from '../redux/actions/Home';
import { getTypes, subtractNumberGame, sumNumberGame, upgradeType } from '../utils/money';

interface Props {
    icon: string;
    title: string;
    value: string;
    maxTime: number;
    isUnlock: boolean;
    unlockPrice: string;
    id: number;
    level: number;
    levelUpPrice: string;
}

function Card({icon, title, value, maxTime, isUnlock, unlockPrice, id, level, levelUpPrice}: Props) {


    const dispatch = useDispatch()
    const { walletMoney } = useSelector((globalState: IGlobalState) => globalState?.header)
    const { cards } = useSelector((globalState: IGlobalState) => globalState?.Home)

    const [time, setTime] = useState(maxTime)
    const umSegundo = 1000;

    const unlockCard = () => {
        const result = subtractNumberGame(unlockPrice, walletMoney);
        if (!result) {
            return alert("Você ainda não tem o suficiente")
        }
        console.log(result);
        dispatch(addMoney(result))
        const card = cards[id]
        card.isUnlock = true; 
        dispatch(unlock(cards))
    }

    const levelUp = () => {
        const result = subtractNumberGame(levelUpPrice, walletMoney)
        if (!result) {
            return alert("Você ainda não tem o suficiente")
        }
        dispatch(addMoney(result));

        const { type, number } = getTypes(levelUpPrice);
        const card = cards[id];
        
        const newLevelUp =  Math.ceil(number + (number * (40/100)));
        const { type: valueType, number: valueNumber } = getTypes(value);
        
        let newValue = Math.ceil(valueNumber + (valueNumber * (30/100)) );
        if (level === 24) {
           newValue *= 2
        }
        card.value = upgradeType(newValue, valueType as string, walletMoney);
        card.level = level + 1;
        card.levelUpPrice = upgradeType(newLevelUp, type as string, walletMoney);
        dispatch(unlock(cards))
    }

    useEffect(() => {
        if (isUnlock) {
            setTimeout(() => {
                if(time <= 0) {
                    const wallet = sumNumberGame(value, walletMoney)
                    dispatch(addMoney(wallet))
                    return setTime(maxTime)
                    // useReducer
                } else {   
                    setTime((time) => time - 1)
                }
            }, umSegundo)
        }
    }, [time, isUnlock])


    return (
    <div className={style.card}>
        <img className={ style.icon } src={icon} alt={title} onClick={() => dispatch(addMoney(sumNumberGame(value, walletMoney)))} />
        <h2>{title}</h2>
        <p>R$: {value}</p>
        <p>{time}s</p>
        <div>
            <p>lvl {level}</p>
            <button onClick={levelUp}>upgrade R$:{levelUpPrice}</button>
        </div>
        { !isUnlock && (
        <span className={style.popupWrapper}>
            <img src={cadeado} alt="lock" className={style.lock} />
            <button className={style.Unlock} onClick={unlockCard}>Unlock R$:{unlockPrice}</button>
        </span>
        )
        }
     </div>
    );
}

export default Card;