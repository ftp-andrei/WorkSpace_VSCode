"use strict"

export function checkIfElementValueIsEmpty(element, nombreElemento) {
    if (element === null || element === undefined || element === "") {
        return `El elemento ${nombreElemento} no tiene valor! <br>`;
    }
    return "";
}

export function checkAlineamientoOK(raza, alineamiento) {
    if (alineamiento==="bueno" && raza==="orco" || alineamiento==="malo" && raza==="elfo" || alineamiento==="neutral" && raza==="humano") {
        return `Un ${raza} no puede tener alineamiento ${alineamiento}. <br>`;
    }
    return "";
}

export function checkIfStatsSumTen(fuerza, vida, suerte) {
    if(parseInt(vida)+parseInt(fuerza)+parseInt(suerte)>10){
        return `Te has pasado de puntos, el total es 10!`;
    }
    if(parseInt(vida)+parseInt(fuerza)+parseInt(suerte)<10){
        return `Te has quedado corto de puntos, el total es 10!`;
    }
    return "";
}