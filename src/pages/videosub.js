// Initialize Firebase

import firebase from "firebase/compat/app"; // Import the specific Firebase app module
import "firebase/compat/auth"; // Import the Firebase Auth module
import "firebase/compat/database";
var firebaseConfig = {
    // Add your Firebase config object here
    apiKey: "AIzaSyD7FjMZz0zoPOOpG-s6MH4Ve-sDf5oY3wU",
    authDomain: "exhibitory-e0f3d.firebaseapp.com",
    databaseURL: "https://exhibitory-e0f3d-default-rtdb.firebaseio.com",
    projectId: "exhibitory-e0f3d",
    storageBucket: "exhibitory-e0f3d.appspot.com",
    messagingSenderId: "356633881196",
    appId: "1:356633881196:web:8f3afd91cb99652b174649"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firebase storage service
  var storage = firebase.storage();
  
  // Get a reference to the media upload forms
  var videoUploadForm = document.querySelectorAll('form')[0];
  var audioUploadForm = document.querySelectorAll('form')[1];
  
  // Get a reference to the media container element
  var mediaContainer = document.querySelector('#mediaContainer');
  
  // Function to handle the video upload
  function uploadVideo() {
    // Get the selected video file from the form
    var videoFile = document.querySelector('#videoUpload').files[0];
    
    // Create a storage reference for the video file
    var videoRef = storage.ref().child('videos/' + videoFile.name);
    
    // Upload the video file to Firebase storage
    videoRef.put(videoFile).then(function(snapshot) {
      console.log('Uploaded a file!');
      
      // Get the download URL for the uploaded video
      videoRef.getDownloadURL().then(function(url) {
        // Create a video element and set its source to the download URL
        var videoElement = document.createElement('video');
        videoElement.src = url;
        videoElement.controls = true;
        
        // Add the video element to the media container
        mediaContainer.appendChild(videoElement);
      });
    });
  }
  
  // Function to handle the audio upload
  function uploadAudio() {
    // Get the selected audio file from the form
    var audioFile = document.querySelector('#audioUpload').files[0];
    
    // Create a storage reference for the audio file
    var audioRef = storage.ref().child('audio/' + audioFile.name);
    
    // Upload the audio file to Firebase storage
    audioRef.put(audioFile).then(function(snapshot) {
      console.log('Uploaded a file!');
      
      // Get the download URL for the uploaded audio
      audioRef.getDownloadURL().then(function(url) {
        // Create an audio element and set its source to the download URL
        var audioElement = document.createElement('audio');
        audioElement.src = url;
        audioElement.controls = true;
        
        // Add the audio element to the media container
        mediaContainer.appendChild(audioElement);
      });
    });
  }

module.exports = uploadVideo;