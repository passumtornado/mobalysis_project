import React from 'react'
import Graves from '../../images/Graves.png'

const Toplayers = () => {
    return (
        <React.Fragment>
            <div className="sidenav-section">
            <div className="toplayerheader">
            <h3>Toplayers</h3>
            <h3>All</h3>
             </div>
           
            <div className="build-wr">
             <div className="build-text">Player name</div>
             <div className="build-textone">WR</div>
            </div>
            <div className="buildContent mt-3">
            <div className="buildpop">
            <div className="topPlayer">
            <span><img src={Graves} alt="top" width="20" height="20"/></span>
            <span className="ml-name">Camilla</span>
            </div>
            <span>58%</span>
            </div>
            <div className="buildpop mt-3">
            <div className="topPlayer">
            <span><img src={Graves} alt="top" width="20" height="20"/></span>
            <span className="ml-name">Camilla</span>
            </div>
            <span>58%</span>
            </div>
            <div className="buildpop mt-3">
            <div className="topPlayer">
            <span><img src={Graves} alt="top" width="20" height="20"/></span>
            <span className="ml-name">Camilla</span>
            </div>
            <span>58%</span>
            </div>
            </div>
           
            </div>
        </React.Fragment>
    )
}

export default Toplayers