/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect,  useState, useContext } from 'react'
import ProgressBar from './ProgressBar'
// import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { Store } from "../../contextStore";
import { sort } from 'd3-array';


function ChampionTable({value,OnClick}) {

    const [champions, setChampions] = useState([]);
    const [Loading,setLoading] = useState(false);
    const { state } = useContext(Store);

    useEffect(() => {
        
       setLoading(true);
       axios.get(`https://be.dev.earlygame.scalework.net/lol/champs/?champion=${state?.filters?.champion || 'all'}&region=${state?.filters?.region || 1}&tier=${state?.filters?.tier || 1}&duration=${state?.filters?.duration || 1}&role=${state?.filters?.role || 1}&fgm=${state?.filters?.fgm || 1}`)
            .then(response => {
                const sortedChampions = sortData(response.data?.champions || []);
                setChampions(sortedChampions);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setChampions([]);
                setLoading(false);  
            });  
           
    },[state]);

    const sortData = (championsData) => {
        let sortedChampions = [];
        sortedChampions = championsData.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        return sortedChampions;
    }

    return (
        <React.Fragment>
        <div className="champion-section mt-4 animate__animated animate__zoomIn">
        
     
        <div className="champion-header">
            <h3>Champions</h3>
            <div className="filter-section">
            
            </div>
            </div>
            <table className="table table-striped table-responsive table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Pick Rate</th>
                    <th scope="col">Win Rate</th>
                    <th scope="col">Ban Rate</th>
                    <th scope="col">Pentas/Match<i className="fa fa-arrow-up"></i><i className="fa fa-arrow-down"></i></th>
                    <th scope="col">KDA<i className="fa fa-arrow-up"></i><i className="fa fa-arrow-down"></i></th>
                    </tr>
                </thead>
                <tbody>
                    { !Loading ?
                        champions && champions.length > 0 ?
                        champions.map((champion, index) => {
                            return(
                                <tr key={index+1}>
                                <th scope="row">{index+1}</th>
                                <td>
                                    <NavLink 
                                        to= {{
                                            pathname: `/championstats/${champion?.id}`,
                                    }} className="name-link"
                                    >
                                    <img src={champion?.image} alt={champion?.name} className="avatar"/>
                                    <span>{champion?.name}</span>
                                    </NavLink>
                                </td>
                                <td><ProgressBar percentage={`${champion?.pickRate}%`} width={`${champion?.pickRate}%`} color={'bluecolor'}/></td>
                                <td><ProgressBar percentage={`${champion?.winRate}%`}  width={`${champion?.winRate}%`}  color={'orangecolor'} /></td>
                                <td><ProgressBar percentage={`${champion?.banRate}%`} width={`${champion?.banRate}%`}  color={'greencolor'} /></td>
                                <td>{champion?.pentasMatch}</td>
                                <td>{champion?.KDA}</td>
                            </tr>
                            ); 
                        }) : (<> <span>No data Available</span> </>)  
                        : (<ReactBootstrap.Spinner animation="border" className="spinner" /> )
                    }
                </tbody>
            </table> 
            </div>
            
        </React.Fragment>
    )
}

export default ChampionTable
