import React, { Component } from "react"
import Introduce from "./introduce"
import TimePanel from "./timePanel"
import ScorePanel from "./scorePanel"


export default ({ score, showTime }) =>
    <div className="info">
        <TimePanel showTime = {showTime} />

        <ScorePanel score = {score} />

        <Introduce />
    </div>
