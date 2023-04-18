import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; // Import the specific Firebase app module
import "firebase/compat/auth"; // Import the Firebase Auth module
import "firebase/compat/database";
import Navbar from "../components/Navbar";

// Add your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7FjMZz0zoPOOpG-s6MH4Ve-sDf5oY3wU",
  authDomain: "exhibitory-e0f3d.firebaseapp.com",
  databaseURL: "https://exhibitory-e0f3d-default-rtdb.firebaseio.com",
  projectId: "exhibitory-e0f3d",
  storageBucket: "exhibitory-e0f3d.appspot.com",
  messagingSenderId: "356633881196",
  appId: "1:356633881196:web:8f3afd91cb99652b174649"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // Get the currently logged in user
      const user = firebase.auth().currentUser;
      if (user) {
        const userEmail = user.email;

        // Fetch user data from Firebase Realtime Database based on email
        const userDataRef = firebase.database().ref("users");
        const snapshot = await userDataRef.orderByChild("email").equalTo(userEmail).once("value");
        const userDataVal = snapshot.val();

        // Update state with fetched user data
        if (userDataVal) {
          // Convert the fetched data into an array of objects
          const userDataArray = Object.keys(userDataVal).map(key => ({
            id: key,
            ...userDataVal[key]
          }));

          // Set the user data in state
          setUserData(userDataArray[0]);
        }
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    // Show loading or placeholder while data is being fetched
    return <div>Loading...</div>;
  }
  console.log(userData);

  return (
    <div><Navbar/>
    <div className="profile-container">
      <div className="profile-info-container">
        <h1 className="profile-title">{userData.name}</h1>
        <ul className="profile-info-list">
          <li className="profile-info-item">
            <span className="profile-info-label">Wallet Address:</span>{" "}
            <span className="profile-info-value">{userData.walletAddress}</span>
          </li>
          <li className="profile-info-item">
            <span className="profile-info-label">Date of Birth:</span>{" "}
            <span className="profile-info-value">{userData.dob}</span>
          </li>
          {/* <li className="profile-info-item">
            <span className="profile-info-label">Competitions Participated:</span>{" "}
            <span className="profile-info-value">{userData.competitionsParticipated}</span>
          </li>
          <li className="profile-info-item">
            <span className="profile-info-label">Competitions Won:</span>{" "}
            <span className="profile-info-value">{userData.competitionsWon}</span>
          </li> */}
        </ul>
      </div>
      
    </div>
    </div>
  );
};

export default Profile;