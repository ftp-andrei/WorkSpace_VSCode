"use strict";
function buscarDiferencias() {
  let numeroA = document.getElementById("listaA").value;
  let numeroB = document.getElementById("listaB").value;
  alert("Lista A: "+numeroA+ "\nLista B: "+ numeroB + "\nSalida: "+arrayDif(numeroA,numeroB));
}

function arrayDif(numeroA,numeroB){
    numeroA=numeroA.split(",");
    numeroB=numeroB.split(",");
    for(let i=0;i<numeroA.length;i++){
        for(let j=0;j<numeroB.length;j++){
           numeroA= numeroA.filter(numeroBuscar => numeroBuscar != numeroB[j]);
        }
    }
    return numeroA;
}


function binario() {
    let numero = document.getElementById("binario").value;
    alert("El resultado de "+numero +" es: "+calculoBinario(numero));
  }

function calculoBinario(numero){
    let contador=0;
    let binNum=parseInt(numero);
    binNum=binNum.toString(2);
    for(let i=0;i<binNum.length;i++){
        if(binNum.charAt(i)==1){
            contador++;
        }
    }
    return contador;
  }

