import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useHistory from react-router-dom
import firebase from "firebase/compat/app"; // Import the specific Firebase app module
import "firebase/compat/auth"; // Import the Firebase Auth module
import "firebase/compat/database";
import competitionsData from "/home/gaurav/Downloads/layer3/layer/src/components/competitionsData.js";

    
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
const LoginPage = () => {
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("Login successful!");
  
        // Fetch data from Firebase Realtime Database after successful login
        const dbRef = firebase.database().ref("events"); // Replace with your database node reference
        dbRef.on("value", (snapshot) => {
          const dataSnapshot = snapshot.val();
          console.log("Data retrieved:", dataSnapshot);


          for(const eventKey in dataSnapshot){
            if (dataSnapshot.hasOwnProperty(eventKey)){
                const event = dataSnapshot[eventKey];
                if(event.type === "Live" && !(event.name in competitionsData.live)){
                    competitionsData.live.push({
                     name: event.name,
                     prizepool: event.prizePool,
                     maxParticipations: event.totalParticipants,
                     date: event.date,
                     category:event.category,
                     type:event.type,
                     nwinners:event.winner,
                     organizer:event.organiser,
                     duration: event.duration
                    });
                    console.log(event.prizePool);
                   
                 }
                 else if(event.type==="Upcoming"&& !(event.name in competitionsData.upcoming)){
                     competitionsData.upcoming.push({
                         name: event.name,
                         prizepool: event.prizePool,
                         maxParticipations: event.totalParticipants,
                         date: event.date,
                         category:event.category,
                         type:event.type,
                         nwinners:event.winner,
                         organizer:event.organiser,
                        duration: event.duration

                        });
                        console.log(event.prizePool);
                 }
                 else if(event.type === "Past"&& !(event.name in competitionsData.past)){
                     competitionsData.past.push({
                         name: event.name,
                         prizepool: event.prizePool,
                         maxParticipations: event.totalParticipants,
                         date: event.date,
                         category:event.category,
                         type:event.type,
                         nwinners:event.winner,
                         organizer:event.organiser,
                        duration: event.duration

                        });
                        console.log(event.prizePool);
                    }
            }
          }
          // Use the retrieved data as needed
          
          
        });
  
        // Redirect to a different page on successful login
        navigate("/HomePage"); // Replace "/HomePage" with the desired URL
      } catch (error) {
        console.error("Error logging in:", error);
      }
    };
  

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input type="email" id="email" className="login-input" />
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input type="password" id="password" className="login-input" />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {/* Add a Link with the desired URL */}
        <Link to="/RegistrationPage" className="login-link">
          Register
        </Link>
      </div>
      <div className="login-footer">
        <p className="login-footer-text">
          Contact Us | Navigation | About Us
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
