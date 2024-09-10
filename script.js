document.getElementById("btn").addEventListener("click", function(){

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let result = document.getElementsByClassName("result")[0];
    let operator = document.getElementById("selectOp").value;

    switch(operator) {
        case "plus":
            result.innerHTML = Number(num1) + Number(num2); 
        break;
        case "min":
            result.innerHTML = Number(num1) - Number(num2);
        break;
        case "div":
            result.innerHTML = Number(num1) / Number(num2);
        break;
        case "multi":
            result.innerHTML = Number(num1) * Number(num2);
        break;
        default:
            result.innerHTML = "Invalid operation selected";
    }
});
