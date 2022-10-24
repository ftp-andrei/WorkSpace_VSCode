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
