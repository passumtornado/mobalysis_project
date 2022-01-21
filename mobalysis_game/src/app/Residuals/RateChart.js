import React from 'react'
// import './RateChart.css'

const RateChart = (props) => {
    return (
        <div>
           <div className="card-ratechart">
            <img src={props.src} alt="pick rate" className="pickrate" />
            <h3>{props.label}</h3>
            </div> 
        </div>
    )
}

export default RateChart
