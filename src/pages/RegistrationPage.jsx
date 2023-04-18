import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"; 
import competitionsData from "../components/competitionsData";

firebase.initializeApp({
    apiKey: "AIzaSyD7FjMZz0zoPOOpG-s6MH4Ve-sDf5oY3wU",
    authDomain: "exhibitory-e0f3d.firebaseapp.com",
    databaseURL: "https://exhibitory-e0f3d-default-rtdb.firebaseio.com",
    projectId: "exhibitory-e0f3d",
    storageBucket: "exhibitory-e0f3d.appspot.com",
    messagingSenderId: "356633881196",
    appId: "1:356633881196:web:8f3afd91cb99652b174649"
});

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Get the history object from the history library

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Account created successfully!");


      const userRef = firebase.database().ref("users"); // Reference to "users" collection
      const newUser = {
        name: name,
        walletAddress: walletAddress,
        dob: dob,
        email: email
      };
      userRef.push(newUser);


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
                   organizer:event.organizer
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
                       organizer:event.organizer
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
                       organizer:event.organizer
                      });
                      console.log(event.prizePool);
                  }
          }
        }
        // Use the retrieved data as needed
        
        
      });


      navigate("/HomePage"); // Redirect to LoginPage after successful registration
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1 className="registration-title">Registration</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="registration-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Wallet Address"
            className="registration-input"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="registration-input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email ID"
            className="registration-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="registration-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="registration-button">
            Register
          </button>
          {/* Add a Link with the desired URL */}
          <Link to="/LoginPage" className="registration-link">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
