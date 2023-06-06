import React, { useState } from 'react';
import style from '../styles/Home.module.css'
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { ICards, IGlobalState } from '../interfaces/redux';

function Home() {

    const { cards } = useSelector((globalState: IGlobalState) => globalState?.Home)

    return (
        <>
        <Header />
        <div className={style.home}>
            {cards.map(({icon, title, value, maxTime, type, isUnlock, id, unlockPrice}: ICards) => (
                <Card
                    key={id}
                    icon={icon} 
                    title={title}
                    value={value}
                    maxTime={maxTime}
                    type={type}
                    isUnlock={isUnlock}
                    unlockPrice={unlockPrice}
                    id={id}
                />
            ))}
        </div>
        </>
    );
}

export default Home;