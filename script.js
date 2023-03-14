window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Create an array of five promises that resolve with a random time between 1 and 5 seconds
const promises = Array.from({ length: 5 }, () => new Promise(resolve => {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  setTimeout(() => resolve(randomTime), randomTime * 1000);
}));

// Use Promise.any to wait for the first promise to resolve and then print its result to the div with id "output"
Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = `The first promise resolved with result: ${result}`;
  })
  .catch(error => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = `All promises rejected with error: ${error}`;
  });
