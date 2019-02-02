var num = document.getElementById("numInput");
document.getElementById("randomBtn").addEventListener("click", displayRandom);

var min = document.getElementById("minInput");
var max = document.getElementById("maxInput");
document.getElementById("randomMinMax").addEventListener("click", displayMinMaxRandom);



function displayRandom() {
    return document.getElementById("randomNum").innerHTML = Math.floor(Math.random() * Number(num.value) + 1);
}

function displayMinMaxRandom() {
    if(Number(max.value) > Number(min.value)) {
        return document.getElementById("minMaxNum").innerHTML = Math.floor(Math.random() * (Number(max.value) - Number(min.value)) + Number(min.value));
    }
    return document.getElementById("minMaxNum").innerHTML = "Max value has to be greater than Min value!";
}