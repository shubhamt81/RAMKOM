
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
  firebase.initializeApp(firebaseConfig);
var namev,rollv,secv,genv;

function Ready(){
    namev=document.getElementById('namebox').value;
    rollv=document.getElementById('rollbox').value;
    secv=document.getElementById('secbox').value;
    genv=document.getElementById('gboz').value;

}

document.getElementById('insert').onclick=function(){
    Ready();
    firebase.database().ref('user/data/'+rollv).set({
        Nameofstudent: namev,
        rollno: rollv,
        section: secv,
        gender: genv

    })
}
