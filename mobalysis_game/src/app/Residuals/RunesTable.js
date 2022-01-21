import React, { useState, useEffect, useContext } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'

import ProgressBar from './ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

import { Store } from "../../contextStore";
import axios from 'axios';
import DropdownChamp from './DropdownChamp';

function RunesTable() {
    const [Loading, setLoading] = useState(false);
    const { state } = useContext(Store);
    const [runes, setRunes] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://be.dev.earlygame.scalework.net/lol/runes/performance?champion=${state?.filters?.champion || 'all'}&region=${state?.filters?.region || 1}&tier=${state?.filters?.tier || 1}&duration=${state?.filters?.duration || 1}&role=${state?.filters?.role || 1}&fgm=${state?.filters?.fgm || 1}`)
            .then(response => {
                console.log(response.data?.runes);
                setRunes(response.data?.runes);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setRunes([]);
                setLoading(false);

            });

    }, [state]);



    return (
        <div>
            <div className="champion-section  mt-4 animate__animated animate__zoomIn runes">
                <div className="champion-header">
                    <h3>Runes</h3>
                    <div className="filter-sectionrunes">

                    </div>
                </div>
                <table className="table table-striped table-responsive table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Path</th>
                            <th scope="col">Runes</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !Loading ?
                                runes && runes.length > 0 ?
                                runes.map((rune, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td>
                                                <div className="precision">
                                                    <span><img src={rune?.primaryStyle?.icon} alt={rune?.primaryStyle?.key} className="mt-4" /></span><br />
                                                    <h4>{rune?.primaryStyle?.name}</h4>
                                                    <span>{rune?.primaryStyle?.description}</span>
                                                </div>
                                                <br />
                                                <br />
                                                <div className="domination">
                                                    <hr />
                                                    <span><img src={rune?.subStyle?.icon} alt={rune?.subStyle?.key} className="mt-4" /></span><br />
                                                    <h4>{rune?.subStyle?.name}</h4>
                                                    <span>{rune?.subStyle?.description}</span>
                                                    <br />
                                                    <br />
                                                    {/* <div className="Line-shard"></div>
                                                    <h1> Shards </h1>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="keystone">
                                                    <h4>KeyStones</h4>
                                                    {rune?.primaryStyle?.keystones && rune?.primaryStyle.keystones.length > 0
                                                        && rune?.primaryStyle.keystones.map((keystone, index) => {
                                                            return <span key={index + 1}><img src={keystone?.icon} alt={keystone?.key} className={`ml-3 ${!keystone?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br />
                                                <h4>Lesser runes</h4>
                                                <div className="slot1">
                                                    {rune?.primaryStyle?.slot_1 && rune?.primaryStyle.slot_1.length > 0
                                                        && rune?.primaryStyle.slot_1.map((slot, index) => {
                                                            return <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br />
                                                <div className="slot2">
                                                    {rune?.primaryStyle?.slot_2 && rune?.primaryStyle.slot_2.length > 0
                                                        && rune?.primaryStyle.slot_2.map((slot, index) => {
                                                            return <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br />
                                                <div className="slot3">
                                                    {rune?.primaryStyle?.slot_3 && rune?.primaryStyle.slot_3.length > 0
                                                        && rune?.primaryStyle.slot_3.map((slot, index) => {
                                                            return <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br />
                                                <br />
                                                <div className="keystonesec">
                                                    <h4>KeyStones</h4>
                                                    {rune?.subStyle.keystones && rune?.subStyle.keystones.length > 0
                                                        && rune?.subStyle.keystones.map((keystone, index) => {
                                                            return <span key={index + 1}><img src={keystone?.icon} alt={keystone?.key} className={`ml-3 ${!keystone?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br />
                                                <h4>Lesser runes</h4>
                                                <div className="slot-1">
                                                    {rune?.subStyle?.slot_1 && rune?.subStyle.slot_1.length > 0
                                                        && rune?.subStyle.slot_1.map((slot, index) => {
                                                            return <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br />
                                                <div className="slot-2">
                                                    {rune?.subStyle?.slot_2 && rune?.subStyle.slot_2.length > 0
                                                        && rune?.subStyle.slot_2.map((slot, index) => {
                                                            return <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br />
                                                <div className="slot-3">
                                                    {rune?.subStyle?.slot_3 && rune?.subStyle.slot_3.length > 0
                                                        && rune?.subStyle.slot_3.map((slot, index) => {
                                                            return <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br />
                                                <h4>Shards</h4>
                                                <div className="shards-icon1">
                                                    {rune?.shards.defense && rune?.shards.defense.length > 0
                                                        && rune?.shards.defense.map((shard, index) => {
                                                            return <span key={index + 1}><img src={shard?.icon} alt={shard?.key} className={`ml-3 ${!shard?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                                <br /> */}
                                                <div className="Line-shard"></div>
                                                <h1> Shards </h1>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="keystone">
                                                <h4>KeyStones</h4>
                                                {rune?.primaryStyle?.keystones && rune?.primaryStyle.keystones.length > 0
                                                    && rune?.primaryStyle.keystones.map((keystone, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={keystone?.icon} alt={keystone?.key} className={`ml-3 ${!keystone?.selected && 'selected'}`} data-tip data-for={keystone?.key}/></span>
                                                            <ReactTooltip className="tooltip-info" id={keystone?.key} effect="solid">
                                                            <span>{keystone?.name}</span>
                                                
                                                           </ReactTooltip>
                                                            </React.Fragment>
                                                            )

                                                        
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <h4>Lesser runes</h4>
                                            <div className="slot1">
                                                {rune?.primaryStyle?.slot_1 && rune?.primaryStyle.slot_1.length > 0
                                                    && rune?.primaryStyle.slot_1.map((slot, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} data-tip data-for={slot?.key} /></span>
                                                            <ReactTooltip className="tooltip-info" id={slot?.key} effect="solid">
                                                            <span>{slot?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <div className="slot2">
                                                {rune?.primaryStyle?.slot_2 && rune?.primaryStyle.slot_2.length > 0
                                                    && rune?.primaryStyle.slot_2.map((slot, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} data-tip data-for={slot?.key} /></span>
                                                            <ReactTooltip className="tooltip-info" id={slot?.key} effect="solid">
                                                            <span>{slot?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                        )
                                                       
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <div className="slot3">
                                                {rune?.primaryStyle?.slot_3 && rune?.primaryStyle.slot_3.length > 0
                                                    && rune?.primaryStyle.slot_3.map((slot, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} data-tip data-for={slot?.key} /></span>
                                                            <ReactTooltip className="tooltip-info" id={slot?.key} effect="solid">
                                                            <span>{slot?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <br />
                                            <div className="keystonesec">
                                                <h4>KeyStones</h4>
                                                {rune?.subStyle.keystones && rune?.subStyle.keystones.length > 0
                                                    && rune?.subStyle.keystones.map((keystone, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={keystone?.icon} alt={keystone?.key} className={`ml-3 ${!keystone?.selected && 'selected'}`} data-tip data-for={keystone?.key}/></span>
                                                            <ReactTooltip className="tooltip-info" id={keystone?.key} effect="solid">
                                                            <span>{keystone?.name}</span>
                                                
                                                           </ReactTooltip>
                                                            </React.Fragment>
                                                            )
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <h4>Lesser runes</h4>
                                            <div className="slot-1">
                                                {rune?.subStyle?.slot_1 && rune?.subStyle.slot_1.length > 0
                                                    && rune?.subStyle.slot_1.map((slot, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} data-tip data-for={slot?.key} /></span>
                                                            <ReactTooltip className="tooltip-info" id={slot?.key} effect="solid">
                                                            <span>{slot?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <div className="slot-2">
                                                {rune?.subStyle?.slot_2 && rune?.subStyle.slot_2.length > 0
                                                    && rune?.subStyle.slot_2.map((slot, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} data-tip data-for={slot?.key} /></span>
                                                            <ReactTooltip className="tooltip-info" id={slot?.key} effect="solid">
                                                            <span>{slot?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <div className="slot-3">
                                                {rune?.subStyle?.slot_3 && rune?.subStyle.slot_3.length > 0
                                                    && rune?.subStyle.slot_3.map((slot, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={slot?.icon} alt={slot?.key} className={`ml-3 ${!slot?.selected && 'selected'}`} data-tip data-for={slot?.key} /></span>
                                                            <ReactTooltip className="tooltip-info" id={slot?.key} effect="solid">
                                                            <span>{slot?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <h4>Shards</h4>
                                            <div className="shards-icon1">
                                                {rune?.shards.defense && rune?.shards.defense.length > 0
                                                    && rune?.shards.defense.map((shard, index) => {
                                                        return (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={shard?.icon} alt={shard?.key} className={`ml-3 ${!shard?.selected && 'selected'}`} data-tip data-for={shard?.id} /></span>
                                                            <ReactTooltip  className="tooltip-info" id={shard?.id} effect="solid">
                                                            <span>{shard?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                            )
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <div className="shards-icon2">
                                                {rune?.shards.flex && rune?.shards.flex.length > 0
                                                    && rune?.shards.flex.map((shard, index) => {
                                                        return  (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={shard?.icon} alt={shard?.key} className={`ml-3 ${!shard?.selected && 'selected'}`} data-tip data-for={shard?.id} /></span>
                                                            <ReactTooltip  className="tooltip-info runestext" id={shard?.id} effect="solid">
                                                            <span>{shard?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                            )
                                                    })
                                                }
                                            </div>
                                            <br />
                                            <div className="shards-icon3">
                                                {rune?.shards.offense && rune?.shards.offense.length > 0
                                                    && rune?.shards.offense.map((shard, index) => {
                                                        return  (
                                                            <React.Fragment>
                                                            <span key={index + 1}><img src={shard?.icon} alt={shard?.key} className={`ml-3 ${!shard?.selected && 'selected'}`} data-tip data-for={shard?.id} /></span>
                                                            <ReactTooltip  className="tooltip-info" id={shard?.id} effect="solid">
                                                            <span>{shard?.name}</span>
                                                            </ReactTooltip>
                                                            </React.Fragment>
                                                            )
                                                    })
                                                }
                                            </div>
                                        </td>
                                        {/* <td>
                                            <div className="runes-progress">
                                                <span className="text">Pick rate</span>
                                                <ProgressBar percentage={`${rune?.pickRate}%`} width={`${rune?.pickRate}%`} color={'bluecolor'} />
                                                <br />
                                                <div className="shards-icon3">
                                                    {rune?.shards.offense && rune?.shards.offense.length > 0
                                                        && rune?.shards.offense.map((shard, index) => {
                                                            return <span key={index + 1}><img src={shard?.icon} alt={shard?.key} className={`ml-3 ${!shard?.selected && 'selected'}`} /></span>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            </td> */}
                                            <td>
                                                <div className="runes-progress">
                                                    <span className="text">Pick rate</span>
                                                    <ProgressBar percentage={`${rune?.pickRate}%`} width={`${rune?.pickRate}%`} color={'bluecolor'} />
                                                    <br />
                                                    <span className="text">Win rate</span>
                                                    <ProgressBar percentage={`${rune?.winRate}%`} width={`${rune?.winRate}%`} color={'orangecolor'} />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }) : (<> <span>No data Available</span> </>) : (<ReactBootstrap.Spinner animation="border" className="spinner" />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RunesTable