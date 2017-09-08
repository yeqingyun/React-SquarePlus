import React from "react"

export default ({score}) => 
    <div>已得分:<span id="local_score">{score ? score : 0}</span></div>