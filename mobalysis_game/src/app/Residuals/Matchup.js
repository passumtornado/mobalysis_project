import React from 'react'
import Graves from '../../images/Graves.png'

const Matchup = () => {
    return (
        <React.Fragment>
            <div className="sidenav-section matchup">
            <h3>Matchup Specific</h3>
            <div className="build-wr">
             <div className="build-text">vs champion</div>
             <div className="build-textone">WR</div>
            </div>
            <div className="buildContent mt-3">
            <div className="buildpop">
            <div className="matchupPlayer">
            <span><img src={Graves} alt="top" width="20" height="20"/></span>
            <span className="ml-name">Camilla</span>
            </div>
            <span>58%</span>
            </div>
            <div className="buildpop mt-3">
            <div className="matchupPlayer">
            <span><img src={Graves} alt="top" width="20" height="20"/></span>
            <span className="ml-name">Camilla</span>
            </div>
            <span>58%</span>
            </div>
            <div className="buildpop mt-3">
            <div className="matchupPlayer">
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

export default Matchup