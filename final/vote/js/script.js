// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADgKnI9gjHAkjmlovYZ8wujucAEDOpy7k",
    authDomain: "ntut-final-project-2019.firebaseapp.com",
    databaseURL: "https://ntut-final-project-2019.firebaseio.com",
    projectId: "ntut-final-project-2019",
    storageBucket: "ntut-final-project-2019.appspot.com",
    messagingSenderId: "339118929270",
    appId: "1:339118929270:web:1dec273fca91d293"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //var db=firebase.firestore();
  var database=firebase.database();

  function Vote(val)
  {
      alert("gdg");
    var data=[0,0,0];
    console.log(val);
    var i;
    var candidate=["han","tsai","ke"];
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
            for(i=0;i<data.length;i++)
            {
                firebase.database().ref("president/"+candidate[i]).on('value',function (snapshot) 
                {
                    data[i] = snapshot.val();
                    console.log(data[i]);   
                });
            }
            data[val]+=1;
            firebase.database().ref("president").set({
                han:data[0],
                tsai:data[1],
                ke:data[2]
            })
        } else {
          // No user is signed in.
          window.location.href='./sign_in/sign_in.html';
        }
      });
    
        
  }