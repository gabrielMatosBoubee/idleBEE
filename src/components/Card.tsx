import React, { useEffect, useState } from 'react';
import { addMoney, addXp } from '../redux/actions/header';
import style from '../styles/Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import cadeado from '../icons/cadeado-8bits-removebg.png'
import { ICards, IGlobalState } from '../interfaces/redux';
import { unlock } from '../redux/actions/Home';

interface Props {
    icon: string;
    title: string;
    value: number;
    maxTime: number;
    type: string | "Real" | "XP";
    isUnlock: boolean;
    unlockPrice: number;
    id: number;
}

function Card({icon, title, value, maxTime, type, isUnlock, unlockPrice, id}: Props) {


    const dispatch = useDispatch()
    const { moneyValue, xp } = useSelector((globalState: IGlobalState) => globalState?.header)
    const { cards } = useSelector((globalState: IGlobalState) => globalState?.Home)

    const [time, setTime] = useState(maxTime)
    const umSegundo = 1000;

    const unlockCard = () => {
        if (moneyValue < unlockPrice) {
            return alert("Você ainda não tem o suficiente")
        }
        const card = cards.find((card) => card.id === id) as ICards;
        card.isUnlock = true;
        const newCards = cards.filter((card) => card.id !== id) 
        newCards.push(card);
        dispatch(unlock(newCards))
    }

    useEffect(() => {
        if (isUnlock) {
            setTimeout(() => {
                if(time === 0) {
                    type === "Real" ? dispatch(addMoney(value)) : dispatch(addXp(value))
                    return setTime(maxTime)
                } else {   
                    setTime(time - 1)
                }
            }, umSegundo)
        }
    }, [time, isUnlock])


    return (
    <div className={style.card}>
        <img className={ style.icon } src={icon} alt={title} onClick={() => dispatch(addMoney(523))} />
        <h2>{title}</h2>
        <p>R$: {value}</p>
        <p>{time}s</p>
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