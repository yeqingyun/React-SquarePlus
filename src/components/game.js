import React from "react"
import GameOver from "./gameOver"


export default ({ gameData, next }) =>
    <div>
        <div id="local_game" className="game">
            {
                gameData.map((arrayItem) =>
                    arrayItem.map((item) =>
                        <div className={item ? item.replace("1", "") : "none"}></div>
                    )
                )
            }
        </div>
        <GameOver />
        <div id="local_next" className="next">
            {
                next && next.data.length ?
                    next.data.map((arrayItem) =>
                        arrayItem.map((item) =>
                            <div className={item ? item : "none"}></div>
                        )
                    )
                    : null
            }
        </div>
    </div>