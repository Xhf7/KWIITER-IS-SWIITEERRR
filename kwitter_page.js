var firebaseConfig = {
      apiKey: "AIzaSyCoMELURbGB7Fxrv9MjTqcF8yvYJwoxO1E",
      authDomain: "switter-the-swettest.firebaseapp.com",
      databaseURL: "https://switter-the-swettest-default-rtdb.firebaseio.com",
      projectId: "switter-the-swettest",
      storageBucket: "switter-the-swettest.appspot.com",
      messagingSenderId: "350133518585",
      appId: "1:350133518585:web:e86bf4fa606a5c9a866228"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
//YOUR FIREBASE LINKS
room_name = localStorage.getItem("room_name" )
user_name = localStorage.getItem("user_name" )
function Send()
{
Msg = document.getElementById("Msg").value
firebase.database().ref(room_name).push({
    name : user_name,
    Msg : Msg,
    like : 0
});

document.getElementById("Msg").value = " ";

}






function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
