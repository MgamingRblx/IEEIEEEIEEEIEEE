const firebaseConfig = {
      apiKey: "AIzaSyDyXA5akqej1kZSqBh15t4_dcgRdFRhbAw",
      authDomain: "byneo-ba74b.firebaseapp.com",
      databaseURL: "https://byneo-ba74b-default-rtdb.firebaseio.com",
      projectId: "byneo-ba74b",
      storageBucket: "byneo-ba74b.appspot.com",
      messagingSenderId: "643154726418",
      appId: "1:643154726418:web:cc349d6b29a53ab74752cb",
      measurementId: "G-EHBFFJVLSK"
    };firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log (firebaseMessageId);
console.log (messageData)
name = messageData ['name'];
like = messageData ['like'];
nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = nameWithTag + messageWithTag +like_button + spanWithTag; document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();
function updateLike (messageId) {
      console.log ("Botão De Like Pressionado-"+ messageId);
      buttonId = messageId;
      likes = document.getElementById (buttonId).value;
     updateLikes=Number (likes)+1;
     console.log (updateLikes);
     firebase.database ().ref (roomName).child(messageId).Update ({like:UpdateLikes});
     
}
function logout() { localStorage.removeItem("userName"); localStorage.removeItem("roomName"); window.location.replace("index.html"); }