import React, { useState, useEffect, useContext } from 'react'
import david from '../../images/Graves.png'
import ProgressBar from './ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'

import { Store } from "../../contextStore";
import axios from 'axios';

function SpellsTable() {

    const [Loading, setLoading] = useState(false);
    const { state } = useContext(Store);
    const [ spells, setSpells] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://be.dev.earlygame.scalework.net/lol/spellstats?champion=${state?.filters?.champion || 'all'}&region=${state?.filters?.region || 1}&tier=${state?.filters?.tier || 1}&duration=${state?.filters?.duration || 1}&role=${state?.filters?.role || 1}&fgm=${state?.filters?.fgm || 1}`)
            .then(response => {
                console.log(response.data?.data);
                setSpells(response.data?.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setSpells([]);
                setLoading(false);

            });

    }, [state]);


    return (
        <div>
            <div className="champion-section  mt-4 animate__animated animate__zoomIn">
                <div className="champion-header">
                    <h3>Spells</h3>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !Loading ?
                            spells && spells.length > 0 ? spells.map((spell, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td><div className="spellsshow">
                                            <span><img src={spell?.spell_1_icon} alt={spell?.spell_1_name} className="avatar" data-tip data-for={spell?.spell_1_key}/></span>
                                            <ReactTooltip id={spell?.spell_1_key}>
                                            <span>{spell?.spell_1_name}</span>
                                            </ReactTooltip>
                                            <span><img src={spell?.spell_2_icon} alt={spell?.spell_2_name} className="avatar" data-tip data-for={spell?.spell_2_key}/></span>
                                            <ReactTooltip id={spell?.spell_2_key}>
                                            <span>{spell?.spell_2_name}</span>
                                            </ReactTooltip>
                                            <span> {spell?.spell_1_name} - {spell?.spell_2_name}</span>
                                        </div>
                                        </td>
                                        <td><ProgressBar percentage={`${spell?.pickrate}%`} width={`${spell?.pickrate}%`} color={'bluecolor'} /></td>
                                        <td><ProgressBar percentage={`${spell?.winrate}%`} width={`${spell?.winrate}%`} color={'orangecolor'} /></td>
                                    </tr>
                                    )
                                }) : (<> <span>No data Available</span> </>) 
                                : (<ReactBootstrap.Spinner animation="border" className="spinner" /> )
                        }
                    </tbody>
                </table>
            </div>






        </div>
    )
}

export default SpellsTable