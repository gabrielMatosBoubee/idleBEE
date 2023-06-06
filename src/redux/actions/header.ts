export const ADDMONEY = "addMoney"
export const ADDXP = "addXp"

export const addMoney = (payload: number) => ({
    type: ADDMONEY,
    payload
});

export const addXp  = (payload: number) => ({
    type: ADDXP,
    payload
});