export let bindKeyEvenet = (ops) => {
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 38://up
                ops.rotate()
                break
            case 39://right
                ops.right()
                break
            case 37://left
                ops.left()
                break
            case 40://down
                ops.down()
                break
            case 32://space
                ops.fall()
                break
            case 13://enter
                ops.pause()

        }
    }

}

export let clearKeyEvenet = (ops) => {
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 13://enter
                ops.pause()

        }
    }
}