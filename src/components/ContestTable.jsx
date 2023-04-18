import React from 'react';
import contestData from './ContestData';

function ContestTable() {
  return (
    <table className="content-table table">
      <thead>
        <tr>
          <th>CONTEST NAME</th>
          <th>START DATE</th>
          <th>NO OF PARTICIPANTS</th>
        </tr>
      </thead>
      <tbody>
        {contestData.map((contest) => (
          <tr key={contest.name}>
            <td className="tabledata">{contest.name}</td>
            <td className="tabledata">{contest.startDate}</td>
            <td className="tabledata">{contest.numParticipants}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContestTable;
