import React, { Component } from "react"
import Introduce from "../../components/introduce"
import TimePanel from "../../components/timePanel"
import ScorePanel from "../../components/scorePanel"
import Btns from "../../components/btns"


export default class Info extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="info">
                <TimePanel />
                
                <ScorePanel />

                <Btns />
                
                <Introduce />
            </div>
        )
    }

}