import React from "react";
import MusicSmallCard from "./ContestCard"
import competitionsData from "./competitionsData";
import MusicSmallCard2 from "../pages/contestcard2";
import MusicSmallCard3 from "../pages/contestcard3";



const Contests = () => {
    const { live, upcoming, past } = competitionsData;
  
    return (
      <div className="music-page">
        <h1 className="music-page-heading">Contests</h1>
        <div className="music-page-card">
          <h2 className="music-page-card-title">Live Competitions</h2>  
          <div className="music-page-card-scrollable">
            {live.map((competition, index) => (
              <MusicSmallCard2 key={index} competition={competition} />
            ))}
          </div>
        </div>
        <div className="music-page-card">
          <h2 className="music-page-card-title">Upcoming Competitions</h2>
          <div className="music-page-card-scrollable">
            {upcoming.map((competition, index) => (
              <MusicSmallCard key={index} competition={competition} />
            ))}
          </div>
        </div>
        <div className="music-page-card">
          <h2 className="music-page-card-title">Past Competitions</h2>
          <div className="music-page-card-scrollable">
            {past.map((competition, index) => (
              <MusicSmallCard3 key={index} competition={competition} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Contests;