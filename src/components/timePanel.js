import React from "react"

export default ({time}) =>
    <div>已用时:<span id="local_time">{time ? time : 0}</span></div>