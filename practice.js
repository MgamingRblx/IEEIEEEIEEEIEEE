const firebaseConfig = {
    apiKey: "AIzaSyDyXA5akqej1kZSqBh15t4_dcgRdFRhbAw",
    authDomain: "byneo-ba74b.firebaseapp.com",
    databaseURL: "https://byneo-ba74b-default-rtdb.firebaseio.com",
    projectId: "byneo-ba74b",
    storageBucket: "byneo-ba74b.appspot.com",
    messagingSenderId: "643154726418",
    appId: "1:643154726418:web:cc349d6b29a53ab74752cb",
    measurementId: "G-EHBFFJVLSK"
  };

  function addUser(){ 
      userName=document.GetElementById=("userName").value
    firebase.database().ref("/").child(userName).update({purpose="Adicionar Usuario"});

  }firebase.initializeApp(firebaseConfig);