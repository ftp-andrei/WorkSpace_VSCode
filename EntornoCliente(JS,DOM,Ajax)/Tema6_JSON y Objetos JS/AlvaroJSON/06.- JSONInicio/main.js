`use strict`

const arrayJSON = [{ "name": "John", "age": 30, "car": null }, { "name": "Pepe", "age": 26, "car": null }, { "name": "Juan", "age": 60, "car": null }];

function stringAJSON() {
    const texto = document.getElementById('texto').value;
    arrayJSON.push(JSON.parse(texto));
}

function mostrarJSON() {
    let parrafo;
    arrayJSON.forEach(element => {
        parrafo = document.createElement('p');
        parrafo.innerText = JSON.stringify(element);
        document.getElementById('container').appendChild(parrafo);
    });

    // Forma Rafa
    // const section=document.getElementById('container').value;
    // arrayJSON.forEach(element => {
    //     const newLine = document.createElement('p');
    //     newLine.appendChild(document.createTextNode(JSON.stringify(element)));
    //     document.body.appendChild(newLine,section);
    // });    
}