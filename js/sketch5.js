

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

var x=0;
var q=0;
var z=0;
document.getElementById('add').onclick=function(){
    x=x+1;
    console.log(x);
    document.getElementById("q").innerHTML=x;
}
document.getElementById('sub').onclick=function(){
    if(x>0){
        x=x-1;
        console.log(x);
    }
    else{
        alert("Please add in cart to remove")
    }
    document.getElementById("q").innerHTML=x;
}


document.getElementById('a').onclick=function(){
    q=x*1500;
    document.getElementById("p").innerHTML=q;
    
}
document.getElementById('b').onclick=function(){
    if(q>0){
        var z="Pay Rs "
        
        alert(z.concat(q," to the bank details and enter your UTR."));
    }
    else{
        alert("Error you have not added any product to cart!!!");
    }
    
}
var n,m,p,a;
function Ready(){
    n=document.getElementById('namebox').value;
    m=document.getElementById('mail').value;
    p=document.getElementById('pay').value;
    a=document.getElementById('ad').value;
    

}

document.getElementById('po').onclick=function(){
    Ready();
    
    if(n=="" || m=="" || p=="" || a=="" || q==0){
        alert("YOU HAVE NOT ENETER A REQUIRED FILLED");

    }
    else{
        alert("Your oreder has been successfully placed!!!");
        z=Math.floor((Math.random())*100000000+1);
        firebase.database().ref('user_buy_data/'+n).set({
            Client_name:n,
            Client_bins_count=x,
            Client_mail:m,
            Client_pay_detail:p,
            Client_address:a,
            Client_ref:z

        })
        var i="cridentials\n";
        var f=i.concat("\nuser_name:",n,"\nuser_mail:",m,"\nuser_pay_detail:",p,"\nuser_address:",a,"\nuser_ref:",z,"\nYou will recieve your package soon ,use your reference number to login")
        console.log(f)
        Email.send({ 
            Host: "smtp.gmail.com", 
            Username: "ragnorok45678@gmail.com", 
            Password: "shubham@81", 
            To: m, 
            From: "ragnorok45678@gmail.com", 
            Subject: "Your credentials", 
            Body: f 
          })
    }
}


