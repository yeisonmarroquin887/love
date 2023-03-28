const getRandonMoney = (Arr) => {
    const indexRandon = Math.floor(Math.random() * Arr.length)
    return Arr[indexRandon]
   
}

export default getRandonMoney 