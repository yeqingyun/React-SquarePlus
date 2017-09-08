import React, { Component } from "react"
import Info from "./info"
import Game from "../components/game"
import * as squareUtil from "../util/squareUtil"
import * as operate from "../util/operate"
import "../static/css/style.css"


let cur = squareUtil.randmonSquare()
let timer = null
let pauseFlag = true

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameData: squareUtil.gamedata,
            next: squareUtil.randmonSquare()
        }
    }

    //判断点是否合法
    checkPonit = (pox, x, y) => {
        try {
            let data = this.state.gameData[pox.x + x][pox.y + y]

            if (pox.x + x < 0) {
                return false
            } else if (pox.x + x >= this.state.gameData.length) {
                return false
            } else if (pox.y + y < 0) {
                return false
            } else if (pox.y + y >= this.state.gameData[0].length) {
                return false
            } else if (data != 'none' && data.indexOf(1) < 0) {
                return false
            }
            return true
        } catch (e) {
            return false
        }
    }

    //判断方块位置是否合法
    checkLegal = (pos, data) => {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                if (data[i][j] != 'none') {
                    if (!this.checkPonit(pos, i, j)) {
                        return false
                    }
                }
            }
        }
        return true
    }


    //判断游戏是否结束
    checkGameOver = () => {
        let { gameData, next } = this.state
        if (!this.checkLegal(next.origin, next.data)) {
            return true
        }
        return false
    }


    //判断消行
    checkClear = () => {

        let { gameData } = this.state
        let lines = 0

        let check = (data) => {
            return data != 'none'
        }

        for (let i = gameData.length - 1; i >= 0; i--) {
            let flag = gameData[i].every(check)

            if (flag) {
                lines++
                for (let k = i; k >= 1; k--) {
                    gameData[k] = (gameData[k - 1])
                }
                gameData[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                i++
            }
        }
        return lines

    }



    down = () => {
        if (cur.canDown(this.checkLegal)) {
            this.squareGO(cur.down)
            return true
        } else {
            return false
        }
    }

    left = () => {
        if (cur.canLeft(this.checkLegal))
            this.squareGO(cur.left)
    }

    right = () => {
        if (cur.canRight(this.checkLegal))
            this.squareGO(cur.right)
    }

    rotate = () => {
        if (cur.canRotate(this.checkLegal))
            this.squareGO(cur.rotate)
    }

    fall = () => {
        while (this.down()) { }
    }

    pause = () => {
        if ((pauseFlag = !pauseFlag, !pauseFlag)) {//暂停
            this.stop()
            operate.clearKeyEvenet(this)
        } else {//继续
            operate.bindKeyEvenet(this)
            timer = setInterval(this.move, 200)
        }

    }


    //初始化第一个方块及绑定键盘监听
    init = () => {
        operate.bindKeyEvenet(this)

        let { gameData } = this.state
        let { origin, data } = cur
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                if (data[i][j] != 'none')
                    gameData[i + origin.x][j + origin.y] = data[i][j] + "1"
            }
        }
        this.setState({ gameData })
    }





    //将cur设置到gameData显示出来
    setData = () => {
        let { gameData } = this.state
        let { origin, data } = cur
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                if (this.checkPonit(origin, i, j))
                    if (data[i][j] != 'none')
                        gameData[i + origin.x][j + origin.y] = data[i][j] + '1'
            }
        }
        this.setState({ gameData })
    }

    //清空cur下移之前的显示
    clearData = () => {
        let { gameData } = this.state
        let { origin, data } = cur
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                if (this.checkPonit(origin, i, j))
                    gameData[i + origin.x][j + origin.y] = 'none'
            }
        }
        this.setState({ gameData })
    }


    //方块方法
    squareGO = (fun) => {
        this.clearData()
        cur::fun()
        this.setData()
    }


    //自动下落
    move = () => {
        if (cur.canDown(this.checkLegal)) {
            this.squareGO(cur.down)
        } else {
            if (this.checkGameOver()) {
                this.nextSquare()
                this.setData()
                this.stop()
            } else {
                this.fixed()
                this.checkClear()//返回消的行数
                this.nextSquare()
            }
        }

    }

    //方块固定
    fixed = () => {
        let { gameData } = this.state
        let { origin, data } = cur
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                if (this.checkPonit(origin, i, j))
                    gameData[i + origin.x][j + origin.y] = data[i][j]
            }
        }
        this.setState({ gameData })
    }

    //停止游戏
    stop = () => {
        if (timer)
            clearInterval(timer)
    }
    //下一个方块
    nextSquare() {
        let { next } = this.state
        cur = next
        this.setState({ next: squareUtil.randmonSquare() })
    }


    //初始化，开始自动下落
    componentDidMount() {
        this.init()
        timer = setInterval(this.move, 200)
    }



    render() {
        return (
            <div>
                <Game {...this.state} />
                {/* <Info /> */}
            </div>
        )
    }
}
