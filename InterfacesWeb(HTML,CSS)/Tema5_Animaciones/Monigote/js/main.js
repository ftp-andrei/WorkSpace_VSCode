document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#up").addEventListener("click", function () {
    document.querySelector("#monigote").className = "up";
  })
  document.querySelector("#right").addEventListener("click", function () {
    document.querySelector("#monigote").className = "right";
  })
  document.querySelector("#left").addEventListener("click", function () {
    document.querySelector("#monigote").className = "left";
  })
  document.querySelector("#down").addEventListener("click", function () {
    document.querySelector("#monigote").className = "down";
  })
  document.querySelector("#circle").addEventListener("click", function () {
    document.querySelector("#monigote").className = "circle";
  })
  document.querySelector("#plus").addEventListener("click", function () {
    document.querySelector("#monigote").className = "plus";
  })
});

