import React from 'react'
// import './Counter.css'
import Kayle from '../../images/kayle.png'
import Xerath from '../../images/Xerath.png'
import Fizz from '../../images/Fizz.png'
import Graves from '../../images/Graves.png'
import Ahri from '../../images/Ahri.png'
import ButtonView from './ButtonView'

const Counters = () => {
    return (
        <div className="counter-section">
        <div className="counter-main">
        <div className="counter">
           <h4>Counters..</h4>
           <div className="counter-img">
           <img src={Kayle} alt="Kayle" />
           <img src={Xerath} alt="Kayle" />
           <img src={Fizz} alt="Kayle" />
           </div>
         </div>
           <div className="counterby">
           <h4>Is Counted by...</h4>
           <div className="counter-img">
           <img src={Kayle} alt="Kayle" />
           <img src={Graves} alt="Kayle" />
           <img src={Ahri} alt="Kayle" />
           </div>
           </div>
        </div>
        <div className="button-section">
               <ButtonView />
             </div>
        </div>
    )
}

export default Counters

