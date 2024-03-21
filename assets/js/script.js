'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);




document.addEventListener("DOMContentLoaded", function () {
  // Function to close the overlay
  function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.classList.remove("active");
    document.body.classList.remove("overlay-active"); // Remove overlay-active class from body
  }

  // Function to open the overlay
  function openOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.classList.add("active");
    document.body.classList.add("overlay-active"); // Add overlay-active class to body
  }

  // Add click event listener to each project overlay button
  const overlayButton1 = document.querySelector(".projectoverlay1");
  overlayButton1.addEventListener("click", function () {
    openOverlay("projectOverlay1");
  });

  const overlayButton2 = document.querySelector(".projectoverlay2");
  overlayButton2.addEventListener("click", function () {
    openOverlay("projectOverlay2");
  });

  const overlayButton3 = document.querySelector(".projectoverlay3");
  overlayButton3.addEventListener("click", function () {
    openOverlay("projectOverlay3");
  });

  const overlayButton4 = document.querySelector(".projectoverlay4");
  overlayButton4.addEventListener("click", function () {
    openOverlay("projectOverlay4");
  });

  const overlayButton5 = document.querySelector(".projectoverlay5");
  overlayButton5.addEventListener("click", function () {
    openOverlay("projectOverlay5");
  });

  // Close overlay when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".project-overlay") &&
      !event.target.classList.contains("projectoverlay1") &&
      !event.target.classList.contains("projectoverlay2") &&
      !event.target.classList.contains("projectoverlay3") &&
      !event.target.classList.contains("projectoverlay4") &&
      !event.target.classList.contains("projectoverlay5")
    ) {
      closeOverlay("projectOverlay1");
      closeOverlay("projectOverlay2");
      closeOverlay("projectOverlay3");
      closeOverlay("projectOverlay4");
      closeOverlay("projectOverlay5");
    }
  });
});



