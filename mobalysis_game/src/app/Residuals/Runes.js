import React from 'react'
import RunesTable from '../components/RunesTable';


const Runes = () => {
    return (
        <section className="container-fluid">
            <div className="champions">
            <div className="container">
            <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0"></div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <RunesTable />
            </div>
            <div className="col-xl-6 col-lg-3 col-md-0 col-sm-0"></div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Runes