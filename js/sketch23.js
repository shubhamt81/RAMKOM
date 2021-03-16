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
       
        firebase.database().ref('user_buy_data/'+n).on("value",function(snapshot){
            //there is a change in code firebase please grant it
            console.log(snapshot.val());
            if(snapshot.val()===null){
                
                alert("USER NAME IS NOT CORREC");
            }
            else{
                console.log("TRUE");
                firebase.database().ref('user_buy_data/'+n+"/"+r).on("value",function(snapshot){
                
                if(snapshot.val()===null){
                    alert("REF NO. INCORRECT !!!");
                }
                else{
                    console.log("SMART GUY");
                    window.location = "../html/trial5.html";
                    jsarray = [n,m,r];
                    sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
                }
            });

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


