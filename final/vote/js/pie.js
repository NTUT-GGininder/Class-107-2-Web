// Your web app's Firebase configuration
var firebaseConfig = {
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

  var db=firebase.firestore();
  var database=firebase.database();
  var data1=[0,0,0];
  var i;
  var candidate=["han","tsai","ke"];
  $(document).ready(function (){
     for(i=0;i<data1.length;i++)
         {
             firebase.database().ref("/president/"+candidate[i]).on('value',function (snapshot) 
             {
                 data1[i] = snapshot.val();
                 console.log(data1[i]);   
             });
         }  
    
     var data2 = [
     {label: "韓國瑜", data: data1[0]},
     {label: "蔡英文", data: data1[1]},
     {label: "柯文哲", data: data1[2]}
     ];

    $.plot($("#flotcontainer"), data2,
    {
    series: {
    pie: {show: true}
    },
    legend: {show: false
    }
    });
  });