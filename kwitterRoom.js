
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
  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
function send(){
  msg=document.getElementById("msg").value;
firebase.database().ref(roomName).push({
  Name:username,
  message:msg,
  like:0

});  document.getElementById("msg").value="";   }