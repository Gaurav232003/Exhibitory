import React from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useLocation } from "react-router";

// Firebase configuration
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
initializeApp(firebaseConfig);
const storage = getStorage();
const VideoPage = () => {
    const location = useLocation()
    const videos = location.state.name;
  const handleButtonClick = () => {
    const file = document.getElementById("videoUpload").files[0];
    const storageRef = ref(storage, `${videos}/${file.name}`);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Upload complete");
        // Do something with the snapshot, e.g. get download URL
        // snapshot.ref.getDownloadURL().then((downloadURL) => {
        //   console.log("File available at", downloadURL);
        //   // Do something with the downloadURL, e.g. save it in a database
        // });
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Media Upload Example</h1>
      <form>
        <label htmlFor="videoUpload">Select a video to upload:</label>
        <input type="file" id="videoUpload" accept="video/*" />
        <button type="button" onClick={handleButtonClick}>
          Upload Video
        </button>
      </form>
      <div id="mediaContainer"></div>
    </div>
  );
};

export default VideoPage;
