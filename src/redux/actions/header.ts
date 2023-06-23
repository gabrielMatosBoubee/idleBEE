import { IWallet } from "../../interfaces/redux";

export const ADDMONEY = "addMoney"
export const ADDXP = "addXp"
export const ADDTYPE = "addType"

export const addMoney = (payload: IWallet) => ({
    type: ADDMONEY,
    payload
});

export const addXp  = (payload: number) => ({
    type: ADDXP,
    payload
});

export const addType = (payload: string) => ({
    type: ADDTYPE,
    payload
})