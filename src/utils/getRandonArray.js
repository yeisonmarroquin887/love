const getRandonArray = (Array) => {
    const indexRandon = Math.floor(Math.random() * Array.length)
    return Array[indexRandon]
   
}

export default getRandonArray

