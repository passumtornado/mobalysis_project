import React from "react";
import ChampionBanner from '../components/ChampionBanner';
import Rate from '../components/Rate';
import History from '../components/History'
// import pickhistory from '../../images/pickhistory.png'
// import winhistory from '../../images/winhistory.png'
// import banhistory from '../../images/banhistory.png'
import BestChamp from '../components/BestChamp'
import RolesPerformance from '../components/RolesPerformance';
import Counters from '../components/Counters';
import ChampionTable from '../components/ChampionTable';
import Annie from "../../images/Annie_0.jpg";
import progress from '../../progress.json';
import stats from '../../stats.json';

export function ChampionDetails() {

    const championObj = {
        name: "Annie",
        image_path: Annie
    }

    return (
        <div>
            <ChampionBanner champion={championObj}/>
            <Rate data={progress}/>
            <History data={stats} plot="Population History" color='red'/>
            <History data={stats} plot="Winrate History" color='blue'/>
            <History  data={stats} plot="Banrate History" color='green'/>
            <BestChamp />
            <RolesPerformance />
            <Counters />

            <ChampionTable />
        </div>

    );

}
