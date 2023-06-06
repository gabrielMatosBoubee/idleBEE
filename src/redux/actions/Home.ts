import { ICards } from "../../interfaces/redux";

export const UNLOCK = "Unlock"

export const unlock  = (payload: Array<ICards>) => ({
    type: UNLOCK,
    payload
});