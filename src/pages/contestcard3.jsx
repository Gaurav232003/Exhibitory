import React from "react"
import { useNavigate } from "react-router-dom"

const MusicSmallCard3 = ({ competition}) => {
  const { name, prizepool, maxParticipations, date,duration,organizer,nwinners,category,type } = competition;
  const navigate = useNavigate();
  const data = {
    name:name,
    prizepool: prizepool,
    maxParticipations:maxParticipations,
    date:date,
    duration:duration,
    organizer:organizer,
    nwinners:nwinners,
    category:category,
    type:type
  };
  const handleCardClick = () => {
    navigate("CompetitionPage3",{state:data});
  };

  return (
    <div
      className="music-small-card"
      onClick={handleCardClick}                                     
      style={{ backgroundColor: "#008080", color: "white" }}
      // Add style attribute with backgroundColor and color proper  
    >
      <h3 className="music-small-card-title">{name}</h3>
      <p className="music-small-card-info">Prize Pool: {prizepool}</p>
      <p className="music-small-card-info">Max Participations: {maxParticipations}</p>
      <p className="music-small-card-info">Date: {date}</p>
      <p className="music-small-card-info">Category: {category}</p>
    </div>
  );
};

export default MusicSmallCard3;
