"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const tabs = require("./modules/tabs");
  const modalsObject = require("./modules/modals");
  const timer = require("./modules/timer");
  const menuCard = require("./modules/menuCard");
  const slider = require("./modules/slider");
  const culculator = require("./modules/calculator");
  const forms = require("./modules/forms");

  const { modals, openModal, closeModal, modal, modalTimerId } = modalsObject;
  tabs();
  modals();
  timer();
  menuCard();
  slider();
  culculator();
  forms(openModal, closeModal, modal, modalTimerId);
});
