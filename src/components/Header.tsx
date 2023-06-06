import React from 'react';
import style from '../styles/Header.module.css'
import coin from '../icons/—Pngtree—pixel art coin icon design_8529397.png'
import chapeu from '../icons/chapeuFormatura-removebg-preview.png'
import { useSelector } from 'react-redux';
import { IGlobalState } from '../interfaces/redux';


function Header() {

    const { moneyValue, xp } = useSelector((globalState: IGlobalState) => globalState?.header)

    return (
        <header className={style.header}>
            <span className={style.item}>
                <img src={ coin } alt="dinheiro" className={style.icon} />
                <span className={style.value}>{moneyValue}</span>
            </span>
            <span className={style.item}>
                <img src={ chapeu } alt="dinheiro" className={style.icon} />
                <span className={style.value}>{xp}</span>
            </span>
        </header>
    );
}

export default Header;