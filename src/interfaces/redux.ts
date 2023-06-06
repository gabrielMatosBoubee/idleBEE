export interface ICards {
    id: number;
    icon: string;
    title: string;
    value: number;
    maxTime: number;
    type: "Real" | "XP";
    isUnlock: boolean;
    unlockPrice: number;
}

export interface IGlobalState {
    Home: {
        cards: Array<ICards>
    };
    header: {xp: number; moneyValue: number}
}