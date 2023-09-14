let n = 0;

document.getElementById("Compteur").innerHTML = n;

document.getElementById("moins").onclick = function(){

    n -= 1;
    document.getElementById("Compteur").innerHTML = n;

}

document.getElementById("restart").onclick = function(){

    n = 0;
    document.getElementById("Compteur").innerHTML = n;

}

document.getElementById("plus").onclick = function(){

    n += 1;
    document.getElementById("Compteur").innerHTML = n;

}

