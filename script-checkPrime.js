var checkPrime = document.getElementById("primeInput");
document.getElementById("primeBtn").addEventListener("click", isPrime);

function isPrime() {
    var prime = true;
    if(checkPrime.value === "") {
        return document.getElementById("primeNum").innerHTML = "Please input a number";
    }
    for(var i = 2; i < Number(checkPrime.value); i++) {
        if(checkPrime.value % i === 0) {
            return document.getElementById("primeNum").innerHTML = checkPrime.value + " is not a prime number";
        }
    }
    
    return document.getElementById("primeNum").innerHTML = checkPrime.value + " is a prime number";
}