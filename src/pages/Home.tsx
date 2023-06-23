import React, { useState } from 'react';
import style from '../styles/Home.module.css'
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { ICards, IGlobalState } from '../interfaces/redux';
import Layout from '../components/Layout';

function Home() {

    const { cards } = useSelector((globalState: IGlobalState) => globalState?.Home)

    return (
        <Layout>
        <div className={style.home}>
            {cards.map(({icon, title, value, maxTime, type, isUnlock, id, unlockPrice, level, levelUpPrice}: ICards) => (
                <Card
                    key={id}
                    icon={icon} 
                    title={title}
                    value={value}
                    maxTime={maxTime}
                    isUnlock={isUnlock}
                    unlockPrice={unlockPrice}
                    id={id}
                    level={level}
                    levelUpPrice={levelUpPrice}
                />
            ))}
        </div>
        </Layout>
    );
}

export default Home;