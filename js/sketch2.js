








var v = Math.floor((Math.random() * 100) + 1);
var z = Math.floor((Math.random() * 100) + 1);
var c = Math.floor((Math.random() * 100) + 1);




document.getElementById("r").innerHTML=v;
/*document.getElementById("y").innerHTML=z;
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

/*
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



