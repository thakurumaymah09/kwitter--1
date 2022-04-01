// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD26yxxnR9rHNDHXPVYOtIAZgIDCsigvk8",
    authDomain: "kwitter-1-67ee4.firebaseapp.com",
    projectId: "kwitter-1-67ee4",
    storageBucket: "kwitter-1-67ee4.appspot.com",
    messagingSenderId: "787433508569",
    appId: "1:787433508569:web:20b9d17fd25c2fdecfb8c8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
