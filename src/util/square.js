import { setRandomClass } from "./squareUtil"


var Square = function () {
    this.data = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    this.dir = 0

    this.class = null

    this.origin = {
        x: 0,
        y: 0
    }
}

Square.prototype.canDown = function (valid) {
    var testDown = {
        x: this.origin.x + 1,
        y: this.origin.y,
    }
    return valid(testDown, this.data)
}

Square.prototype.canLeft = function (valid) {
    var testLeft = {
        x: this.origin.x,
        y: this.origin.y - 1,
    }
    return valid(testLeft, this.data)
}

Square.prototype.canRight = function (valid) {
    var testRight = {
        x: this.origin.x,
        y: this.origin.y + 1,
    }
    return valid(testRight, this.data)
}

Square.prototype.canRotate = function (valid) {
    var d = (this.dir + 1) % 4
    return valid(this.origin, this.rotates[d])
}

Square.prototype.down = function () {
    this.origin.x += 1
}

Square.prototype.left = function () {
    this.origin.y -= 1
}

Square.prototype.right = function () {
    this.origin.y += 1
}

Square.prototype.rotate = function (num) {
    if (!num)
        num = 1
    this.dir = (this.dir + num) % 4
    this.data = setRandomClass(this.rotates[this.dir], this.class)
}
export default Square