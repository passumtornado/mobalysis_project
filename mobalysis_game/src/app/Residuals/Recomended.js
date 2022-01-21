import React from 'react'

const Recomended = () => {
    return (
        <React.Fragment>
        <div className="role-section">
        <h3>Recommended Build</h3>
        <table className="table table-borderless table-responsive table-striped table-dark">
            <thead>
                <tr>

                    <th scope="col-4"></th>
                    <th scope="col-4"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    Build
                    </td>
                    <td>
                     WR
                    </td>
                </tr>
                <tr>
                    <td>
                    Most Popular
                    </td>
                    <td>
                    58%
                     </td>
                </tr>
                <tr>
                    <td>
                    Highest Win rate
                    </td>
                    <td>
                    56%
                     </td>
                </tr>
            </tbody>
        </table>
    </div>
        {/*
            <div className="sidenav-section recommend">
            <h3>Recommended Build</h3>
            <div className="build-wr">
             <div className="build-text">Build</div>
             <div className="build-textone">WR</div>
            </div>
            <div className="buildContent mt-3">
            <div className="buildpop">
            <p>Most Popular</p>
            <span>58%</span>
            </div>
            <div className="buildrate">
            <p>Highest Win rate</p>
            <span>58%</span>
            </div>
            </div>
           
            </div> */

        }
        </React.Fragment>
    )
}

export default Recomended
