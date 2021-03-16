var z;
var arr=[];
var arr2=[];
var arr3=[];
var arr4=[];
var i=0;
var s='c100';
var p='p';
var v,k; 
jsarray = JSON.parse(sessionStorage.getItem("jsArray"));
console.log(jsarray);


var name=jsarray[0];
var ref=jsarray[2];


function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
       // document.getElementsByClassName('.ni').classList.add(arr2[i]);
    }
}
multiplyNode(document.querySelector('.myclass'), 15, true);
      


const demoClasses = document.querySelectorAll('.r');

// Change the text of multiple elements with a loop
demoClasses.forEach(element => {
    z=Math.floor((Math.random() * 100) + 1);
    element.textContent = z;
    arr.push(z);
   
});
console.log(arr);



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







