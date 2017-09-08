import React from "react"

export default ({ score }) =>
    <div style={{ float: 'left', marginLeft: 30 }}>已得分:<span id="local_score">{score ? score : 0}</span></div>