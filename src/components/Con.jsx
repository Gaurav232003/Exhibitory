import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router";


const CompetitionPage = () => {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleButtonClick = () => {
    navigate("VideoPage",{state: location.state})
  };

  const handleCloseModal = () => {
    setShowModal(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your video submission logic here
    // For example, you can use a library like FormData to send the video file to a server
    // Once the submission is successful, you can setSubmitSuccess(true) to display a success message
    // You can also handle error cases and display appropriate messages
    setSubmitSuccess(true);
  };

  return (
    <div className="competition-page">
      <div className="competition-page-container">
      <h1 className="competition-page-heading">{location.state.name}</h1>

      <table className="competition-page-table">
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
                <td>{location.state.nwinners}</td>
              </tr>
              <tr>
                <td>Max Participants:</td>
                <td>{location.state.maxParticipations}</td>
              </tr>
              <tr>
                <td>Duration:</td>
                <td>{location.state.duration} days</td>
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
        <button className="competition-page-submit" onClick={handleButtonClick}>
          Submit
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Submit Video</h2>
              <p>Please submit your video using the form below:</p>
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Submit</button>
              </form>
              <button className="modal-close" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitionPage;
