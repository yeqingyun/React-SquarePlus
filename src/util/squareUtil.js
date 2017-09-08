import makeSquare from "./squareFactory"
import randomMax from "./randomUtil"
export let gamedata = [
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
]

export let randmonSquare = () => {
    return makeSquare(randomMax(7), randomMax(4))
}


export let setRandomClass = (data, randomClass) => {
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (data[i][j] != 0 && data[i][j] != 'none')
                data[i][j] = randomClass
            else
                data[i][j] = 'none'
        }
    }
    return data
}

