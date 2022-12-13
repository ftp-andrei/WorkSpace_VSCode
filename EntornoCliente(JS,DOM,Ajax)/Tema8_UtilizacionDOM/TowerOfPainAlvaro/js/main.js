"use strict"

const home = document.querySelector("#casita");
home.addEventListener('click', () => {
    location.reload();
})

const form = document.querySelector("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.classList.add("noDisplay");
    const size = document.querySelector('#size').value;
    const border = document.querySelector('#border').value;
    const color = document.querySelector('#background').value;
    let pyramid = document.querySelector('#piramide');
    pyramid.appendChild(generatePyramid(size, border, color));
    transformerPiramide(pyramid);

    const arrayBrick = document.querySelectorAll(".brick");
    for (let element of arrayBrick) {
        element.addEventListener("click", function () {
            fallBrick(element);
        });
    }
})

function fallBrick(brick) {
    brick.style.transform = "translateY(1000px)";
    brick.style.opacity = "0";
}

function transformerPiramide(piramide) {
    piramide.style.opacity = "1";
}

function generatePyramid(size, border, color) {
    const pyramid = document.createElement("div");
    pyramid.classList.add("pyramid");
    for (let index = 1; index <= size; index++) {
        const row = generateRow(index, border, color);
        pyramid.appendChild(row);
    }
    return pyramid;
}

function generateRow(size, border, background) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let index = 0; index < size; index++) {
        const brick = generatePyramidBrick(border, background);
        row.appendChild(brick);
    }
    return row;
}

function generatePyramidBrick(border, background) {
    const brick = document.createElement("div");
    brick.classList.add("brick");
    brick.setAttribute("style", `border: ${border}px solid ${visibleBorder(background)};background-color: ${background};
    background: radial-gradient(circle, ${visibleBorder(background)} 0%, ${background} 100%);`);
    return brick;
}

function visibleBorder(color) {
    const letter = "abcdef";
    const darkerColor = color.substring(1);
    let darkerColorResult = "";
    for (let index = 0; index < darkerColor.length; index++) {
        if (/[0-8]/.test(darkerColor.charAt(index))) {
            darkerColorResult += (parseInt(darkerColor.charAt(index)) + 1);
        }
        if (/[9]|[a-e]/.test(darkerColor.charAt(index))) {
            darkerColorResult += letter.charAt(letter.indexOf(darkerColor.charAt(index)) + 1);
        }
        if (/[f]/.test(darkerColor.charAt(index))) {
            darkerColorResult += "0";
        }
    }
    return '#' + darkerColorResult;
}

