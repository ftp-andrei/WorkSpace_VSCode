"use strict";
import { storeData } from "./arrays.js";
import {
  checkIfElementValueIsEmpty,
  checkIfElementValueIsZero,
  soloNumeros,
} from "./validator.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("nombre")
    .addEventListener("keypress", function (event) {
      soloNumeros(event);
    });
});
