
var score=0;

function add(){
    score+=1;
    console.log(score);
       
}

function setup(){
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC64xfgRp5hW-RAe15p_eEQ72dlj4V3j-4",
    authDomain: "pbl-tiem.firebaseapp.com",
    databaseURL: "https://pbl-tiem-default-rtdb.firebaseio.com",
    projectId: "pbl-tiem",
    storageBucket: "pbl-tiem.appspot.com",
    messagingSenderId: "561392104907",
    appId: "1:561392104907:web:ef9105995aae76db42f24e",
    measurementId: "G-EWFS1J1BLK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();





console.log(firebase);


var database=firebase.database();
var ref=database.ref('score');

var data={
    name: "TONY CHACHA IN THE HOUSE",
    score: 81

}
ref.push(data);

}


