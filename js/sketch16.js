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

var n,m,r;
var j,k,l;
var x;
document.getElementById('l').onclick=function(){
   
    n=document.getElementById("name").value;
    m=document.getElementById("mail").value;
    r=document.getElementById("ref").value;

    
    console.log(n,m,r);
    try{
       
        firebase.database().ref('user_buy_data/').on("value",function(snapshot){
            //there is a change in code firebase please grant it
            
            if(snapshot.val().n==undefined){
                console.log("FUCK YOU");
            }
            else{
                console.log("TRUE");
            }
        });
        
        /*if(x){
            firebase.database().ref('user_buy_data/'+n).on("value",function(snapshot){
                //there is a change in code firebase please grant it
                console.log(snapshot.val().Client_ref);
                console.log("tru2");
            });
            if(snapshot.val().n=undefined){
                console.log("fuck u");
            }
            console.log("true");
            x=1;

        } */      
    }
    catch(err){
        alert("Enter valid cridentials");
    }


}


