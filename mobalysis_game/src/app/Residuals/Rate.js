import React from 'react'
// import './Rate.css'
import DonutChart from "../charts/DonutChart";
import 'animate.css'


const Rate = ({data}) => {

    return (
     <div>
        <div className="card-rate animate__animated animate__zoomIn animate__delay-2s">
            <div className="chart-section">
                <div className="rate">
                    <DonutChart data={data.pick_rate} name='Pick Rate' size={[300,300]} svg={[200,200]}
                    margin={{top: 20, right: 20, bottom: 30, left: 30}} color="red"/>
                    {/* <h3 className="card-rate-text">Pick Rate</h3> */}
                </div>
                <div className="rate">
                    <DonutChart data={data.win_rate} name='Win Rate' size={[300,300]} svg={[200,200]}
                    margin={{top: 20, right: 20, bottom: 30, left: 30}} color="blue"/>
                    {/* <h3 className="card-rate-text">Win Rate</h3> */}
                </div>
                <div className="rate">
                    <DonutChart data={data.ban_rate} name='Ban Rate' size={[300,300]} svg={[200,200]}
                    margin={{top: 20, right: 20, bottom: 30, left: 30}} color="green" />
                    {/* <h3 className="card-rate-text">Ban Rate</h3> */}
                </div>
                <div className="rate">
                    <DonutChart data={data.mained_by} name='Mained By' size={[300,300]} svg={[200,200]}
                    margin={{top: 20, right: 20, bottom: 30, left: 30}} color="grey"/>
                    {/* <h3 className="card-rate-text">Mained By</h3> */}
                </div>
             </div>
             {/* <div className="button-section">
                <ButtonView />
              </div>*/}

        </div>
    </div>
    )
}

export default Rate
