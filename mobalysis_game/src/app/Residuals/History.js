import React from 'react'
// import HistoryChart from './HistoryChart'
import AreaChart from "../charts/AreaChart";
// import './History.css'
import 'animate.css'


const History = ({data, plot, color, yValue}) => {
    return (
        <div className=" card-area hist animate__animated animate__zoomIn animate__delay-3s">
            <h3>{plot}</h3>
            <AreaChart data={data} size={[480, 250]} color={color} yValue={yValue}/>

        </div>
    )
}

export default History
