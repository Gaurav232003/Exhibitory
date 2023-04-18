import React, { useState } from "react";
import { useLocation } from "react-router";


const CompetitionPage3 = () => {
  const location = useLocation();
  console.log(location.state);


  return (
    <div className="bcomprtition-page">
      <div className="bcomprtition-page-container">
        <h1 className="bcomprtition-page-heading">{location.state.name}</h1>
        <div className="bcomprtition-page-details">
          <table className="bcomprtition-page-table">
            <tbody>
              <tr>
                <td>Date:</td>
                <td>{location.state.date}</td>
              </tr>
              <tr>
                <td>Prize Pool:</td>
                <td>${location.state.prizepool}</td>
              </tr>
              <tr>
                <td>Number of Winners:</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Total Participants:</td>
                <td>{location.state.maxParticipations}</td>
              </tr>
              <tr>
                <td>Duration:</td>
                <td>{location.state.duration}</td>
              </tr>
              <tr>
                <td>Sponsor:</td>
                <td>{location.state.organizer}</td>
              </tr>
              <tr>
                <td>Category:</td>
                <td>{location.state.category}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <h2 className="bcomprtition-page-winners-heading">Winners</h2>
        <div className="bcomprtition-page-winners-list">
          <div className="bcomprtition-page-winner">
            <div className="bcomprtition-page-winner-name">Winner 1</div>
            <div className="bcomprtition-page-winner-description">
              Winner 1 description
            </div>
          </div>
          <div className="bcomprtition-page-winner">
            <div className="bcomprtition-page-winner-name">Winner 2</div>
            <div className="bcomprtition-page-winner-description">
              Winner 2 description
            </div>
          </div>
          </div>
          <div className="bcomprtition-page-winner">
            <div className="bcomprtition-page-winner-name">Winner 3</div>
            <div className="bcomprtition-page-winner-description">
              Winner 3 description
            </div>
          
          {/* Add other winners here */}
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage3;
