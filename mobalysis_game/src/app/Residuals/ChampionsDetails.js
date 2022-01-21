import React from 'react'
import Graves from '../../images/Graves.png'
import './ChampionDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DetailsHeader from './DetailsHeader'
import ChampionSideNav from './Recomended'
import Recomended from './Recomended'
import Matchup from './Matchup'
import Toplayers from './Toplayers'
import Runes from './Runes'
import Spells from './Spells'
import MainSection from './MainSection'


const ChampionsDetails = () => {
    return (
        <React.Fragment>
        <div className="champion-container">
        <div className="row">
           <div className="col-lg-4">
           <div className="profile-sect">
           <div className="avatarChamp">
            <span><img src={Graves} alt="graves" width="100" height="100" /></span>
           </div>
           <div className="avatarName">
           <span className="nameav ">Autrox</span>
           <span className="roleshow">To Build</span>
           </div>
           </div>
           </div>
           <div className="col-lg-4"></div>
           <div className="col-lg-4">
            <div className="list-group">
            <div className="list-group-item">
             <span className="rate">Win rate</span>
             <span className="percent">47%</span>
             {
                // <FontAwesomeIcon icon={faCaretUp} style={{color:'green'}}/>
             }
             
            </div>
            <div className="list-group-item">
            <span className="rate">Pick rate</span>
            <span className="percent">4.7%</span>
            {
                // <FontAwesomeIcon icon={faCaretDown} style={{color:'red'}}/>
            }
           
            </div>
            <div className="list-group-item">
            <span className="rate">Ban rate</span>
            <span className="percent">2.7%</span>
            {
                // <FontAwesomeIcon icon={faCaretDown} style={{color:'red'}}/>
            }
            
            </div>
            <div className="list-group-item">
            <span className="rate">Pentas/Match</span>
            <span className="percent">0</span>  
            </div>
            <div className="list-group-item">
            <span className="rate">KDA</span>
            <span className="percent">5.6/4.8/5.8</span>
            </div>
            </div>
            
           </div>
         </div>
         <div className="row">
         <div className="col-lg-12">
          <DetailsHeader />
         </div>
         </div>
         <div className="row">
         <div className="col-lg-12">
         <MainSection />
        </div>
         </div>
        </div>
        </React.Fragment>
    )
}

export default ChampionsDetails
