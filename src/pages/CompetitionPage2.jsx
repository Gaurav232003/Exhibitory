import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Import the Firestore modules from the version 9 modular SDK

// Firebase configuration
const firebaseConfig = {
    // Your Firebase config object here
    apiKey: "AIzaSyD7FjMZz0zoPOOpG-s6MH4Ve-sDf5oY3wU",
    authDomain: "exhibitory-e0f3d.firebaseapp.com",
    databaseURL: "https://exhibitory-e0f3d-default-rtdb.firebaseio.com",
    projectId: "exhibitory-e0f3d",
    storageBucket: "exhibitory-e0f3d.appspot.com",
    messagingSenderId: "356633881196",
    appId: "1:356633881196:web:8f3afd91cb99652b174649"
};

const arr2=['https://app.realms.today/dao/CPmDLFBotGvZEDaipydirmjXtZNYbbgYnnVdQ9RwkbJn/proposal/F7PiemqbBiqEp2GmhjE2UBqYYtvFr91jsjWUCTzdGvzw','https://app.realms.today/dao/CPmDLFBotGvZEDaipydirmjXtZNYbbgYnnVdQ9RwkbJn/proposal/CAX17BZXPsYdSL2oza19aVQ85fc3Sb9qCJDuEYzBY6JV',''];
// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const CompetitionPage2 = () => {
  const location = useLocation();
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    console.log(location.state.name);
    
    const fetchVideos = async () => {
      try {
        const storageRef = ref(storage); // Get the storage reference
        const videosRef = ref(storageRef, location.state.name); // Get the reference to 'Music Mayhem' folder in storage
        const videosSnapshot = await listAll(videosRef); // List all items in the folder
        const urls = await Promise.all(
          videosSnapshot.items.map(async (item) => {
            const downloadUrl = await getDownloadURL(item); // Get download URL for each item
            return downloadUrl;
          })
        );
        setVideoUrls(urls);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos(); // Call the fetchVideos function
  }, []);

  return (
    <div className="acompetition-page">
      <div className="acompetition-page-container">
        <h1 className="acompetition-page-heading">{location.state.name}</h1>
        <div className="acompetition-page-info">
          <table className="acompetition-page-table">
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
        </div>
        {/* <div className="acompetition-page-participants">
          {videoUrls.map((url, index) => (
            <div className="caompetition-page-card" key={index}>
              <video src={url} controls className="acompetition-page-card-video" />
            </div>
          ))}
        </div> */}
        <ul>
        {videoUrls.map((url, index) => (
          <li key={index} className="video-list-item">
            <video src={url} controls width="300" height="200" />
            <button class="vote-button"><a href={arr2[1]}>Vote</a></button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default CompetitionPage2;
