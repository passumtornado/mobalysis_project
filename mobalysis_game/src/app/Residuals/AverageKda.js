import React from 'react'


const AverageKda = ({kills, deaths, assists}) => {
    return (
        <div className="kda-section">
           <h2><span className="pick">{kills}</span>/<span className="win">{deaths}</span>/<span className="ban">{assists}</span></h2>
           <h4><span>Average KDA</span></h4>
        </div>
    )
}

export default AverageKda