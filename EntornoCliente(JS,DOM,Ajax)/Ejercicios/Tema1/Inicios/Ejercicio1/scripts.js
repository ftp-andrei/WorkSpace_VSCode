function dimeMiEdad() {
    alert('Tengo 22');
    cambiarFondo();
 }
//Fondo random
 function cambiarFondo() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = randomColor;
 }