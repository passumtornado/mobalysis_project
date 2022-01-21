import React,{useState} from 'react'
import david from '../../images/Graves.png'
import ProgressBar from './ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,NavLink} from 'react-router-dom'

function ItemsTable() {


    return (
        <div>
            <div className="champion-section  mt-4 animate__animated animate__zoomIn">
            <div className="champion-header">
            <h3>Runes</h3>
            <div className="filter-section">
            
            </div>
            </div>
            <table className="table table-striped table-responsive table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Class</th>
                <th scope="col">Pick Rate</th>
                <th scope="col">Win Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td><NavLink to="/championstats">
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                </NavLink>
                </td>
                <td>Class 1</td>
                <td><ProgressBar percentage={'70%'} width={'70%'} color={'bluecolor'}/></td>
                <td><ProgressBar percentage={'50%'} width={'50%'}  color={'orangecolor'} /></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td><NavLink to="/championstats">
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                </NavLink>
                </td>
                <td>Class 2</td>
                <td><ProgressBar percentage={'70%'} width={'70%'} color={'bluecolor'}/></td>
                <td><ProgressBar percentage={'50%'} width={'50%'}  color={'orangecolor'} /></td>
              
                </tr>
                <tr>
                <th scope="row">3</th>
                <td><NavLink to="/championstats">
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                </NavLink>
                </td>
                <td>Class 2</td>
                <td><ProgressBar percentage={'70%'} width={'70%'} color={'bluecolor'}/></td>
                <td><ProgressBar percentage={'50%'} width={'50%'}  color={'orangecolor'} /></td>
                
                </tr>
                <tr>
                <th scope="row">4</th>
                <td><NavLink to="/championstats">
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                </NavLink>
                </td>
                <td>Class 2</td>
                <td><ProgressBar percentage={'70%'} width={'70%'} color={'bluecolor'}/></td>
                <td><ProgressBar percentage={'50%'} width={'50%'}  color={'orangecolor'} /></td>
                
                </tr>
                <tr>
                <th scope="row">5</th>
                <td><NavLink to="/championstats">
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                </NavLink>
                </td>
                <td>Class 2</td>
                <td><ProgressBar percentage={'70%'} width={'70%'} color={'bluecolor'}/></td>
                <td><ProgressBar percentage={'50%'} width={'50%'}  color={'orangecolor'} /></td>
              
                </tr>
                <tr>
                <th scope="row">6</th>
                <td><NavLink to="/championstats">
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                </NavLink>
                </td>
                <td>Class 2</td>
                <td><ProgressBar percentage={'70%'} width={'70%'} color={'bluecolor'}/></td>
                <td><ProgressBar percentage={'50%'} width={'50%'}  color={'orangecolor'} /></td>
         
                </tr>
                <tr>
                <th scope="row">7</th>
                <td><NavLink to="/championstats">
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                </NavLink>
                </td>
                <td>Class 2</td>
                <td><ProgressBar percentage={'70%'} width={'70%'} color={'bluecolor'}/></td>
                <td><ProgressBar percentage={'50%'} width={'50%'}  color={'orangecolor'} /></td>
                </tr>
                <tr>
                <th scope="row">8</th>
                <td><NavLink to="/championstats">
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                <span><img src={david} alt="david" /></span>
                </NavLink>
                </td>
                <td>Class 2</td>
                <td><ProgressBar percentage={'70%'} width={'70%'} color={'bluecolor'}/></td>
                <td><ProgressBar percentage={'50%'} width={'50%'}  color={'orangecolor'} /></td>
                </tr>
            </tbody>
            </table>
            </div>
          
          
           
           
           
            
        </div>
    )
}

export default ItemsTable