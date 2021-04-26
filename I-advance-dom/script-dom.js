'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Selecting, Creating and Deleting Elements

// SELECTING ELEMENTS
// //
const header = document.querySelector('.header');
const allSelection = document.querySelectorAll('.section');
//console.log(allSelection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
//console.log(allButtons); //returns HTMLCollection //Live Updates

//console.log(document.getElementsByClassName('btn')); //returns HTMLCollection

// CREATING and INSERTING Elements

// .insertAdjacentHTML - done on Bank app -  inserts the resulting nodes into the DOM tree at a specified position
// element.insertAdjacentHTML(position, text);
// 'beforebegin': Before the element itself.
// 'afterbegin': Just inside the element, before its first child.
// 'beforeend': Just inside the element, after its last child.
// 'afterend': After the element itself.

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message); //adds the element as the first child of the header element.

header.append(message); // adds the element as the last child
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

// DELETE ELEMENTS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message); // DOM traversing
  });

////////////////////////////////////////////////////////////////
////// Styles, Attribute and Classes - //inline styles

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '106%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color); //CSSStyleDeclaration
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.src);
// console.log(logo.className); //nav__logo
// console.log(logo.alt); //Bankist logo

logo.alt = 'Beautiful minimalist logo';

////// Non-standard
//console.log(logo.designer); //undefined
//console.log(logo.getAttribute('designer')); //Kean

logo.setAttribute('company', 'Bankist');

//console.log(logo.src); //http://127.0.0.1:5500/advance-dom/img/logo.png
//console.log(logo.getAttribute('src')); //img/logo.png

const link = document.querySelector('.twitter-link');
//console.log(link.href); //https://twitter.com/jonasschmedtman
//console.log(link.getAttribute('href')); //https://twitter.com/jonasschmedtman

// Data attributes
//console.log(logo.dataset.versionNumber); //data-version-number transform to camelCase for dataset

// Classes
logo.classList.add('k', 'c');
logo.classList.remove('k', 'c');
logo.classList.toggle('k');
logo.classList.contains('k'); // not includes

//logo.className = 'kean'; // Don't use this - will overwrite the existing class
/* 
////////////////////////////////////////////////////////////////
////// Types of Events and Events Handler

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  //alert('addEventListener : Great! You are reading the heading :D');
};

// MODERN Style  addEventListener
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// OLD SCHOOL style
// h1.onmouseenter = function (e) {
//   alert('addEventListener : Great! You are reading the heading :D');
// }; */

//--------------

////////////////////////////////////////////////////////////////
////// Event Propagation : Bubbling and Capturing
//e.target
//e.currentTarget = same as this keyword
// below events receive event from the target elements and bubling phase

//rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  //e.stopPropagation(); // stop only the specific this event. wil never reach on the next event - can sometimes fixed problem for many handler
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav', e.target, e.currentTarget);
  },
  false //true is to capture event not on bubbling events - rarely use this days, for historical reasons
);
/* 
////////////////////////////////////////////////////////////////
////// DOM Traversing - select element based on another elements.
//ex. direct chid or direct parent element.

const h1 = document.querySelector('h1');

//------ Going downwards : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // live collections
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//------ Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

///////opposite of query selector - finds parent
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//------ Going sideways : siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
 */
/* 
///////////////////////////////////////
// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

///////////////////////////////////////
// Sticky navigation: Intersection Observer API
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
 */

////////////////////////////////////////////////////////////////
////// LifeCycle DOM Events
//DOMContentLoaded - html and js will be loaded

//we want all our code loaded after the DOM is ready. but we dont need to listen to the DOMContentLoaded because the script tag already at the end of the body. the last thing that gonna be read in the html, the browser will only find our script, when the rest of the html are already parsed.
//// fired by the ddocument as soon as the HTML is completely parsed which means that the HTML has been downloaded and been converted into DOM Tree. - all scripts must be downloaded and executed before the DOM content loaded event can happen. we can use the DOMContentLoaded to listen to that event.

// document.ready equivalent to DOMContentLoaded in vanilla JS
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

///// fired by the window as soon as not only the HTML parsed, but also all the images and external images and external resources like css file. when the complete page is finish loading this event gets fired.
window.addEventListener('load', function (e) {
  console.log('Page fuly loaded', e);
});

///// created immediate before a user is about to leave a page.
// use this when leaving a form or blog, do not abused this.
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
