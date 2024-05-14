var x = [];
function add(){
    var a=document.getElementById("inputted").value;
    x.push(a);
    document.getElementById("output").innerHTML=x;
    if(x.length>=7){
        x.shift();
    }
}
function remove(){
    x.pop();
    document.getElementById("output").innerHTML=x;
    if(x.length>=7){
        x.shift();
    }
}