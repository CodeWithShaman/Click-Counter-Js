document.getElementById("btn").addEventListener("click", () =>{
    let num = parseInt(document.getElementById("counter").innerHTML) 
    document.getElementById("counter").innerHTML = num + 1;
});

document.getElementById("btn2").addEventListener("click", () =>{
    let num2 = parseInt(document.getElementById("counter").innerHTML) 
    document.getElementById("counter").innerHTML = num2 - 1;
    if (num2 == 0) {
        alert("Stop")
        document.getElementById("counter").innerHTML = num2 = 0;   
    }
});
  