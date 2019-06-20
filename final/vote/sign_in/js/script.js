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
let dbRef = firebase.database().ref().child('object');
const $email = $('#email');
const $password = $('#password');
const $btnSignOut = $('#btnSignOut');
const $signInfo = $('#sign-info');

var mode=0;


$('#SignIn').ready(function(){
  document.getElementById("SignIn").addEventListener("click", function(){
    console.log("sign in");
    document.getElementById('btn').innerHTML = 'Sign In';
    mode=0;
  });
});

$('#SignUp').ready(function(){
  document.getElementById("SignUp").addEventListener("click", function(){
    console.log("sign up");
    document.getElementById('btn').innerHTML = 'Sign Up';
    mode=1;
  });
});

$('#btn').ready(function(){
  document.getElementById("btn").addEventListener("click", function(e){
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    if(mode==0){
      // signIn
      auth.signInWithEmailAndPassword(email, pass)
      .catch(function(e){
        console.log(e.message);
        $signInfo.html(e.message);
      });
    }
    else if(mode==1)
    {
     
    // signUp
    auth.createUserWithEmailAndPassword(email, pass)
    .catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
    }
  });
});
firebase.auth().onAuthStateChanged(function(user){
  if(user) {
      
    console.log(user);
    $signInfo.html(user.email+" is login...");
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: "+profile.providerId);
      console.log("  Provider-specific UID: "+profile.uid);
      console.log("  Name: "+profile.displayName);
      console.log("  Email: "+profile.email);
      console.log("  Photo URL: "+profile.photoURL);
      window.location.href='../參加投票/vote_login.html';
    });
  } else {
    console.log("not logged in");
  }
});
