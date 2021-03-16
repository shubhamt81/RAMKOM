 
 var q;
 
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


  
firebase.database().ref().on("value",function(snapshot){
   
    q=snapshot.val().data;
    console.log(snapshot.val().data);



var v = Math.floor(q%100);/*
var z = Math.floor(q%100);
var c = Math.floor((Math.random() * 100) + 1);


*/

document.getElementById("r").innerHTML=v;
/*
document.getElementById("y").innerHTML=z;
document.getElementById("e").innerHTML=c;*/
var b,n,m;
var s="c100 p";

if(v>=67){
    var k=" dark big orange";
    b=s.concat(v,k);
    document.getElementById("check").innerHTML= "red";
}
else if(v<=33){
    var k=" dark big green";
    b=s.concat(v,k);
    document.getElementById("check").innerHTML= "green";
}
else{
    var k=" dark big yellow";
    b=s.concat(v,k);
    document.getElementById("check").innerHTML= "yellow";
}

/*
if(z>=67){
    var k=" dark big orange";
    m=s.concat(z,k);
    document.getElementById("check1").innerHTML= "red";
}
else if(z<=33){
    var k=" dark big green";
    m=s.concat(z,k);
    document.getElementById("check1").innerHTML= "green";
}
else{
    var k=" dark big yellow";
    m=s.concat(z,k);
    document.getElementById("check1").innerHTML= "yellow";
}


if(c>=67){
    var k=" dark big orange";
    n=s.concat(c,k);
    document.getElementById("check2").innerHTML= "red";
}
else if(c<=33){
    var k=" dark big green";
    n=s.concat(c,k);
    document.getElementById("check2").innerHTML= "green";
}
else{
    var k=" dark big yellow";
    n=s.concat(c,k);
    document.getElementById("check2").innerHTML= "yellow";
}

*/
document.getElementById("myDIV").className = b;
/*
document.getElementById("myDIV1").className = m;
document.getElementById("myDIV2").className = n;*/

});