export default (max) => {
    return Math.ceil(Math.random() * max) - 1
}

export let randomBetween = (min, max) => {
    let result = Math.ceil(Math.random() * max) - 1
    if(result < min){
        result = min
    }
    return result
}