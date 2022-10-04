function contenido() {
   var value = document.getElementById('searchInput').value;
    alert('Has buscado: ' +value);
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