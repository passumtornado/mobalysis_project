import React from 'react'


const HistoryChart = (props) => {
    return (
        <div>
        <div className="history-section">
        <h3>Popularity history</h3>
         <img src={props.src} alt="pick history"/>
        </div>
        </div>
    )
}

export default HistoryChart
