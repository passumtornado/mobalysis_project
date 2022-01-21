import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChampionBanner from '../components/ChampionBanner';
import Rate from '../components/Rate';
import History from '../components/History'
import RolesPerformance from '../components/RolesPerformance'
import AverageKda from '../components/AverageKda'
import BestChamp from '../components/BestChamp';
import axios from 'axios';
import { Store } from "../../contextStore";
import * as ReactBootstrap from 'react-bootstrap';



const ChampionStats = (props) => {

    const [championObj, setChampion] = useState({});
    const [pickRateHistory, setPickRateHistory] = useState([]);
    const [winRateHistory, setWinRateHistory] = useState([]);
    const [banRateHistory, setBanRateHistory] = useState([]);
    const [Loading, setLoading] = useState(false);

    const { state, dispatch } = useContext(Store);


    useEffect(() => {
            const championName = props?.match?.params?.id;
            if (championName) {
                setLoading(true);
                axios.get(`https://be.dev.earlygame.scalework.net/lol/champs/summary?champion=${championName}&region=${state?.filters?.region || 1}&fgm=${state?.filters?.fgm || 1}&duration=${state?.filters?.duration || 1}&tier=${state?.filters?.tier || 1}&role=${state?.filters?.role || 1}`)
                .then(response => {
                    setChampion(response.data);
                    setPickRateHistory(response?.data?.pick_rate_history);
                    setWinRateHistory(response?.data?.win_rate_history);
                    setBanRateHistory(response?.data?.ban_rate_history);
                    setLoading(false);

                })
                .catch(error => console.log(error));
                setChampion({});
                setLoading(false);

            } else {
                props.history.push('/');
            }

    }, [props, props?.match?.params?.id, state]);


    return (
        <section className="container-fluid">
            {
                !Loading ?
                championObj && pickRateHistory && winRateHistory && banRateHistory ?
                (
                    <div className="champion-statitics">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-auto col-sm-0"></div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="row">
                                        <ChampionBanner champion={championObj?.champion} />
                                </div>
                                <div className="row">
                                        <Rate data={championObj} />
                                    </div>
                                    <div className="row mt-4">
                                        <History data={pickRateHistory || []} plot="Popularity History" color='#0484A7' yValue='Pick Rate(%)'/>
                                        <History data={winRateHistory || []} plot="Winrate History" color='#FD4B2D' yValue='Win Rate(%)' />
                                        <History data={banRateHistory || []} plot="Banrate History" color='#00933B' yValue='Ban Rate(%)' />
                                    </div>
                                    <div className="row mt-4">

                                        <BestChamp summoners={championObj?.best_players} champion={championObj?.champion}/>
                                    </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-auto col-sm-0">
                            <div className="row">
                                        <RolesPerformance rolePerformance={championObj?.role_performance}/>
                                    </div>
                                    <div className="row mt-5">
                                        <AverageKda kills={championObj?.kills} deaths={championObj?.deaths} assists={championObj?.assists} />
                                    </div>
                            </div>
                            </div>
                            </div>
                        </div>
                ) 
                : (<> <span>No data Available</span> </>)  
                : (<ReactBootstrap.Spinner animation="border" className="spinner" /> )
            }
        </section>
    )
}

export default ChampionStats
