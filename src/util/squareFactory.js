import Square from "./square";
import { setRandomClass, gamedata } from "./squareUtil"
import * as randomUtil from "./randomUtil"

const proto = Object.create(Square.prototype)


var Square1 = function () {

    Square.call(this)

    this.rotates = [
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ], [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ]
    ]
}
Square1.prototype = proto

var Square2 = function () {

    Square.call(this)

    this.rotates = [
        [
            [0, 2, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ], [
            [2, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square2.prototype = proto

var Square3 = function () {

    Square.call(this)

    this.rotates = [
        [
            [0, 2, 0, 0],
            [0, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ], [
            [2, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square3.prototype = proto


var Square4 = function () {

    Square.call(this)

    this.rotates = [
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square4.prototype = proto

var Square5 = function () {

    Square.call(this)

    this.rotates = [
        [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 2, 0],
            [0, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ], [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 2, 0],
            [0, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square5.prototype = proto

var Square6 = function () {

    Square.call(this)

    this.rotates = [
        [
            [0, 0, 2, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0]
        ], [
            [2, 2, 2, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square6.prototype = proto

var Square7 = function () {

    Square.call(this)

    this.rotates = [
        [
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square7.prototype = proto

const classes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']




export default function (index, dir) {
    let s, randomClass = classes[Math.ceil(Math.random() * classes.length) - 1]
    index += 1
    switch (index) {
        case 1:
            s = new Square1()
            break;
        case 2:
            s = new Square2()
            break;
        case 3:
            s = new Square3()
            break;
        case 4:
            s = new Square4()
            break;
        case 5:
            s = new Square5()
            break;
        case 6:
            s = new Square6()
            break;
        case 7:
            s = new Square7()
    }



    s.origin.x = 0
    s.origin.y = randomUtil.randomBetween(3, gamedata[0].length - 3)
    s.class = randomClass
    s.rotate(dir)
    s.dir = dir
    return s;
}