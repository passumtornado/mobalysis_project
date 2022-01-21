import React from 'react'
import ChampionsDetails from '../components/ChampionsDetails'



const ChampionsDetailsV1 = () => {
  

    return (
        <section className="container-fluid">
        <div className="champions">
          <div className="container">
          <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0"></div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <ChampionsDetails /> 
          </div>
          <div className="col-xl-6 col-lg-3 col-md-0 col-sm-0"></div>
      </div>
          </div>
        </div> 
        </section>
    )
}

export default ChampionsDetailsV1
