import React from 'react'
import Graves from '../../images/Graves.png'
import Top from '../../images/StatModsAttackSpeedIcon.png'

const DetailsHeader = () => {
    return (
        <React.Fragment>
            <div className="profileHeader mt-4">
            <div className="name-section">
                    <div className="avatarChamp">
                    <span><img src={Graves} alt="graves" width="40" height="40" /></span>
                    </div>
                <div class="avatarName">
                    <span className="nameav ">Autrox Build</span>
                    <div className="avatarRole">
                        <span><img src={Top} alt="top" width="20" height="20"/></span>
                        <span>Top - Patch <b>11.2</b></span>
                    </div>
                </div>
                <div className="popularSect">
                <span className="poptext">Most Popular</span>
                <div className="poprate">
                    <span>Win rate <b>58.6%</b> based on <b> 19200</b> matches</span>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default DetailsHeader
