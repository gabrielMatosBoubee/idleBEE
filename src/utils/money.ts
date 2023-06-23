// import { IWallet } from "../interfaces/redux"

// const convertValues = (number: number) => {
//     switch (true) {
//         case number >= 100000000000000000:
//             return `${String(number).substring(0, 3)}AA`
//         case number >= 10000000000000000:
//             return `${String(number).substring(0, 2)}AA`
//         case number >= 1000000000000000:
//             return `${String(number).substring(0, 1)}AA`
//         case number >= 100000000000000:
//             return `${String(number).substring(0, 3)}T`
//         case number >= 10000000000000:
//             return `${String(number).substring(0, 2)}T`
//         case number >= 1000000000000:
//             return `${String(number).substring(0, 1)}T`
//         case number >= 100000000000:
//             return `${String(number).substring(0, 3)}B`
//         case number >= 10000000000:
//             return `${String(number).substring(0, 2)}B`
//         case number >= 1000000000:
//             return `${String(number).substring(0, 1)}B`
//         case number >= 100000000:
//             return `${String(number).substring(0, 3)}M`
//         case number >= 10000000:
//             return `${String(number).substring(0, 2)}M`
//         case number >= 1000000:
//             return `${String(number).substring(0, 1)}M`
//         case number >= 100000:
//             return `${String(number).substring(0, 3)}K` 
//         case number >= 10000:
//             return `${String(number).substring(0, 2)}K` 
//         case number >= 1000:
//             return `${String(number).substring(0, 1)}K` 
//         default:
//             return number;
//     }
// }

export const getTypes = (stringNumber: string) => {

    const regexNumber = /[0-9]/gm;
    const regexAz = /[A-z]/gm;

    const type = stringNumber.split(regexNumber).pop()
    const number = Number(stringNumber.split(regexAz).shift())

    return { type, number }
}

export const upgradeType = (value: number, type: string, wallet: any):string => {
    const numberRank = Object.keys(wallet);

    let index = numberRank.findIndex((typ) => typ === type)
    if(value > 999) {
        while(value > 999) {
            value *= 1/1000
            index++
        }
    }
    return `${Math.ceil(value)}${numberRank[index]}`
}


export const sumNumberGame = (addNumber: string, wallet: any) => {
    const numberRank = Object.keys(wallet)

    const { number, type } = getTypes(addNumber);

    const index = numberRank.findIndex((ele) => type === ele)
                
    let currentValue = number;            
    let newIndex = index;
    
    wallet[numberRank[newIndex]] += currentValue
    while(wallet[numberRank[newIndex]] > 999) {
        const resto = wallet[numberRank[newIndex]] - 1000

        wallet[numberRank[newIndex + 1]] += Math.ceil((wallet[numberRank[newIndex]] - resto)/1000);
        wallet[numberRank[newIndex]] = resto
        
        currentValue = wallet[numberRank[newIndex + 1]]
        newIndex++
    }

    return wallet
}

export const getYourMoney = (wallet: any) => {
    const numberRank = Object.keys(wallet);

    let index = (numberRank.length - 1)

    let isStop = false

    let result = "0";
    while(index >= 0 && !isStop) {
        const walletValue = wallet[numberRank[index]]
        if( walletValue > 0 ) {
            isStop = true;
        }
        result = `${walletValue}${numberRank[index]}`;
        index--
    }

    return result
}

export const subtractNumberGame = (subNumber: string, wallet: any) => {
    const numberRank = Object.keys(wallet)
    const money = getYourMoney(wallet)
    const { type: subType, number: subValue } = getTypes(subNumber);
    const { type: moneyType, number: moneyValue } = getTypes(money);

    if ( subType === moneyType ) {
        if (subValue > moneyValue) return null
            wallet[subType as string] -= subValue;
            return wallet
    }

    const index = numberRank.findIndex((ele) => subType === ele)
    const indexMoney = numberRank.findIndex((ele) => moneyType === ele)
    
    if (index > indexMoney) return null

    let newIndex = index + 1;
    let currentValue = subValue;            

    while(  currentValue > 0 ) {
        
    if( wallet[numberRank[index]] > currentValue ) {
            wallet[numberRank[index]] -= currentValue
            
            if(wallet[numberRank[index]] > 1000) {
                wallet[numberRank[index]] -= 1000
                wallet[numberRank[index + 1]] += 1
            }

            currentValue = 0
            return wallet
    } 

    if ( wallet[numberRank[newIndex]] > 0 ) {
            wallet[numberRank[newIndex - 1]] += 1000
            wallet[numberRank[newIndex]] -= 1
            newIndex --
    } else {
        newIndex++
        }
    }
}

// const wallet = { C: 10, K: 0, M: 544, B: 1, T: 40, AA: 0}

// console.log(subtractNumberGame("10C", wallet))

// export default convertValues