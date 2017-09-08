import React from "react"

export default ({ showTime }) =>
    <div style={{ float: 'left' }}>已用时:<span id="local_time">{showTime ? showTime : 0}</span></div>