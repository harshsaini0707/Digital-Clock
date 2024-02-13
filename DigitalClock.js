const clock =document.getElementById("clock");

setInterval(function(){
    let date = new Date();
    let Time = date.toLocaleString();
    clock.innerHTML = Time
    
},1000)
