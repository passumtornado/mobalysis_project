// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// // import './Navigation.css'
// import { Link,NavLink } from 'react-router-dom'

// const Nav = () => {
//     return (
//         <React.Fragment>
//             <div className="container">
//             <div className="row">
//              <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0"></div>
//              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
//              <div className="nav-section">
//              <div className="nav-table">
//              <table className="table table-responsive" cellPadding="5" cellSpacing="5">
//                 <tr>
//                    <td>
                   
//                    </td>
//                    <td></td>
//                    <td></td>
//                    <td></td>
//                 </tr>
//              </table>
//              </div>
//              </div>
//              <div className="filter-section"></div>
//              </div>
//              <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0"></div>
//              </div>
//             </div>
//         </React.Fragment>
//     )
// }

// export default Nav

import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import './Navigation.css'
import { Link,NavLink } from 'react-router-dom'
import Filter from './Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'



const Nav = () => {
   const [isView,setIsview] = useState(false);
   const [isSelected,setIsSelected] = useState(null);


  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0"></div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="nav-section">
              <div className="nav-table">
                <table className="table table-responsive" cellPadding="5" cellSpacing="5">
                  <tr>
                    <td>
                   
                    </td>
                  </tr>
                </table>
              </div>
              <div className="filter-section w-100">
                <div className="back-section">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">
                    <FontAwesomeIcon icon={faAngleLeft}/> Back
                    </Link></li>
                    <li className="breadcrumb-item active" aria-current="page">champion</li>
                  </ol>
                </div>
        
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-3 col-md-0 col-sm-0"></div>
        </div>
      </div>
    </React.Fragment>

  )
}

export default Nav

