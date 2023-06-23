export interface ICards {
    id: number;
    icon: string;
    title: string;
    value: string;
    maxTime: number;
    type: "Real" | "XP";
    isUnlock: boolean;
    unlockPrice: string;
    level: number;
    levelUpPrice: string;
}

export interface IWallet {
    C: number,
    K: number,
    B: number,
    T: number,
    AA: number,
    AB: number,
    AC: number,
    BA: number,
    BB: number,
    BC: number,
    CA: number,
    CB: number,
    CC: number,
    DA: number,
}

export interface IGlobalState {
    Home: {
        cards: Array<ICards>
    };
    header: {xp: number; moneyValue: string; walletMoney: IWallet;}
}