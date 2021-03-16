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





var z;
var arr=[];
var arr2=[];
var arr3=[];


var i=0;
var s='c100';
var p='p';
var v,k,n='id'; 
var l;
var yy=[];
jsarray = JSON.parse(sessionStorage.getItem("jsArray"));
console.log(jsarray);


var nam=jsarray[0];
var ref=jsarray[2];

firebase.database().ref('user_buy_data/'+nam).on("value",function(snapshot){
var cont=snapshot.val().Client_bins_count;
console.log(cont);
function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
       // document.getElementsByClassName('.ni').classList.add(arr2[i]);
        l=n.concat(i+1);
        console.log(l);
        firebase.database().ref('user_buy_data/'+nam+"/"+ref+"/"+l+"/data").on("value",function(snapshot){
            arr.push(snapshot.val());
            console.log(snapshot.val());
        });
    }
}
multiplyNode(document.querySelector('.myclass'), cont, true);
//console.log(yy);
      


const demoClasses = document.querySelectorAll('.r');

// Change the text of multiple elements with a loop
/*
demoClasses.forEach(element => {
    z=Math.floor((Math.random() * 100) + 1);
    element.textContent = z;
    arr.push(z);
    
   
});*/
console.log(arr);


i=0;

const demoless = document.querySelectorAll('.check');

demoless.forEach(element =>{
    
    v=arr[i];
    i=i+1;

    if(v>=67){
        k='orange';
        b=s.concat(v,k);
        element.textContent= "red"; 
    }
    else if(v<=33){
        k='green';
        b=s.concat(v,k);
        element.textContent= "green";
    }
    else{
        k='yellow';
        b=s.concat(v,k);
        element.textContent= "yellow";
    }
    var c=p.concat(v);
    arr2.push(c);
    arr3.push(k);
    
    


});


//console.log(arr2);
// Access the first element in the NodeList
demoless[0];


console.log(arr2);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(arr2);
i=0;

const demoClasses2 = document.querySelectorAll('.ne');
i=0;
// Change the text of multiple elements with a loop
demoClasses2.forEach(element=>{
    element.classList.add(s,arr2[i],'big','dark',arr3[i]);
    element.classList.remove('ne');
    console.log(arr2[i]);
    
    console.log("added");
    console.log(element.classList);
    i=i+1;
});
demoClasses2[0];




});


