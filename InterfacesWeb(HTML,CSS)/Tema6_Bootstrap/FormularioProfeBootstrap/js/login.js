document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    showToast();
  }, 5000); // 

});

function showToast() {
  new bootstrap.Toast(document.querySelector("#myToast")).show();
}

