'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
              <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
                  <p class="country__row"><span>🗣️</span>${
                    data.languages[0].name
                  }</p>
                  <p class="country__row"><span>💰</span>${
                    data.currencies[0].name
                  }</p>
                  </div>
                  </article>
                  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

///////////////////////////////////////
// XMLHttpRequest - OLD school
/* 
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText); // destructuring to get actual object
    console.log(data);

    const html = `
        <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
            </div>
            </article>
            `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('philippines');
getCountryData('japan');
getCountryData('italy');
 */

///////////////////////////////////////
// Callback Hell

/* 
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  // first callback
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    // get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    // nested callback - callback hell
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText); // no longer array no need to destructure
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('usa');

// CALL-BACK HELL - messy code - hard to maintain and difficult to understand
let i = 1;
setTimeout(() => {
  console.log(`${i} sec passed`);
  setTimeout(() => {
    console.log(`${i} sec passed`);
    setTimeout(() => {
      console.log(`${i} sec passed`);
      setTimeout(() => {
        console.log(`${i} sec passed`);
        i++;
      }, 1000);
      i++;
    }, 1000);
    i++;
  }, 1000);
  i++;
}, 1000);
 */

///////////////////////////////////////
// Promises and the Fetch API - Consuming Promises

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

/* const request = fetch('https://restcountries.eu/rest/v2/name/philippines');
//console.log(request); // Promise

const getCountryData = function (country) {
  //return promise
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      //fulfilled handle promise
      console.log(response);
      return response.json(); //data fetch
    })
    .then(function (data) {
      //callback get access to data
      console.log(data);
      renderCountry(data[0]);
    });
}; 


//SAMPLE
const request = fetch('https://restcountries.eu/rest/v2/name/philippines');

const getCountryData = country =>
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0])); //small chain

getCountryData('philippines');

*/

/* const request = fetch('https://restcountries.eu/rest/v2/name/philippines');

const getCountryData = country =>
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0])); //small chain

getCountryData('philippines'); */

///////////////////////////////////////
// Chaining Promises

// const getCountryData = country =>
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       // Throwing Errors manually - creating error
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders[0];
//       const neighbour = 'fdsafsadfsadf';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     }) //called when fulfilled
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       //called when rejected
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       //called no matter what results will happen.
//       countriesContainer.style.opacity = 1;
//     });
/* 
///////////////////////////////////////
// Throwing Error Manually



const getCountryData = country =>
  // Country 1

  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    //called when fulfilled
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      //called when rejected
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      //called no matter what results will happen.
      countriesContainer.style.opacity = 1;
    });

///////////////////////////////////////
// Handling rejected Promises

btn.addEventListener('click', function () {
  getCountryData('germany');
});

getCountryData('philippines'); */
/* 
///////////////////////////////////////
// The Event Loop in Practice
console.log('Test start'); // 1st
setTimeout(() => console.log('0 sec timer'), 0); // 5th
// to create promise that immediately resolve, with success value
Promise.resolve('Resolved promise 1').then(res => console.log(res)); //3rd priority over the callback queue. executed first from microtask queue

Promise.resolve('Resolved Promise 2').then(res => {
  // 4th
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});

console.log('Test end'); // 2nd
 */
/* 
///////////////////////////////////////
// Building a Simple Promise - encapsulate any async into a Promise

// Promise has 1 argument EXECUTOR FUNTION
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰'); // will mark as fulfilled promise
    } else {
      reject(new Error('You lost your money 💩')); //rejected
    }
  }, 2000);
});

// Promisifying - convert callback based async behavior to promise base
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err)); */

// Promisifying setTimeout
// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

/* let i = 1; // OLD callback hell
setTimeout(() => {
  console.log(`${i} second passed`);
  setTimeout(() => {
    console.log(`${i} second passed`);
    setTimeout(() => {
      console.log(`${i} second passed`);
      setTimeout(() => {
        console.log(`${i} second passed`);
        i++;
      }, 1000);
      i++;
    }, 1000);
    i++;
  }, 1000);
  i++;
}, 1000);
 */

/* // static method in promise constructor
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x)); */

// console.log('Test start'); // 1st
// setTimeout(() => console.log('0 sec timer'), 0); // 5th
// // to create promise that immediately resolve, with success value
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //3rd priority over the callback queue. executed first from microtask queue

// Promise.resolve('Resolved Promise 2').then(res => {
//   // 4th
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(res);
// });
/* 
///////////////////////////////////////
// Promisifying the Geolocation API

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const getJSONCountry = function (url) {
  const request = fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found (${response.status})`);
    return response.json();
  });
  return request;
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with Geocoding ${response.status}`);

      return response.json();
    })
    .then(data => {
      const city = data.city;
      const country = data.country;

      console.log(`You are in ${city}, ${country}`);

      return getJSONCountry(`https://restcountries.eu/rest/v2/name/${country}`);
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(err.message));
};

btn.addEventListener('click', whereAmI); */

///////////////////////////////////////
// Consuming Promises with Async and Await - 2017

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// old way :
//fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res));
// now below is await fetch()
/* 
// Async function - keep running in the background while performing the code that inside of it. then when this function is done it will automatically return a promise


const whereAmI = async function () {
  //** Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  //** Reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  //** Country data

  // await for the result of this promise. this will stop the code exection at this point of the function until the promise is fulfilled, until the data has been fetched
  
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
  );
  const data = await res.json();
  console.log(data[0]);
  renderCountry(data[0]);
};
 */
/* 
///////////////////////////////////////
// Error Handling with try...catch in async await
///////////////////////////////////////
// Returning values from async functions

const whereAmI = async function () {
  try {
    //** Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //** Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    //** Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting Country');
    const data = await res.json();
    // console.log(data[0]);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    //Reject promise returned from async function
    throw err; // re-throwing error
  }
};
console.log('1: Will get location');
// const city = whereAmI(); // will return Promise {<pending>}
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`));

(async function () {
  try {
    const city = await whereAmI();
    await console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log(`3: Finished getting location`);
})();
 */
/* 
///////////////////////////////////////
// Running Promise in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    //run in parallel, return new promise. run at the same time.
    // combinator functions
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('philippines', 'italy', 'japan');
 */

///////////////////////////////////////
// Other Promise Combinators : race, allSettled and any

// Promise.race - the 1st settled promise wins the race, get only 1 result who wins 1st settled
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/korea`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/malaysia`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSettled = ES2020 - takes in array of all settled. no matter if promises get rejected or not, never short circuit

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Promise.any [ES2021] - takes array of multiple promise. will return the first fulfilled promise
Promise.any([
  Promise.reject('ERROR any'),
  Promise.resolve('Another success any'),
  Promise.resolve('Success any'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
