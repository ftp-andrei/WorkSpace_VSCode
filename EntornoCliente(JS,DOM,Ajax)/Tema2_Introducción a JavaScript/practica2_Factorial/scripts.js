function alerta(){
    var numero = document.getElementById("searchInput").value;
    alert(factorial(numero));
}

function factorial(num){
    if(num < 2) return 1
    else return num*factorial(num-1);
}

function soloNumeros(num){
    var code = num ? num.which : num.keyCode;
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
  }