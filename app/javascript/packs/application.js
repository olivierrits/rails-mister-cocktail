/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')

import 'bootstrap';
import $ from 'jquery';
import 'select2';

// const initUpdateNavbarOnScroll = () => {
//   const navbar = document.querySelector('.navbar-lewagon');
//   if (navbar) {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY >= 800) {
//         navbar.classList.add('navbar-lewagon-white');
//         console.log("scrolled");
//       } else {
//         navbar.classList.remove('navbar-lewagon-white');
//         console.log("scrolled");
//       }
//     });
//   }
// }

// initUpdateNavbarOnScroll();

const initSelect2 = () => {
  $('.select2').select2();
};

initSelect2();

// const navbar = document.querySelector(".navbar-lewagon");
// console.log(navbar)

// window.onscroll = function() {
//    // log the length scrolled vertically
//    console.log(window.pageYOffset);
// }



// if (window.pageYOffset > 800) {
//   console.log("passed the barrier")
//   navbar.classList.remove("nav-bar-gone");
// }
