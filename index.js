
// 1
function delayedPromise(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  const promisesArray = [
    delayedPromise("Promise 1", 2000),
    delayedPromise("Promise 2", 1500),
    delayedPromise("Promise 3", 3000),
    delayedPromise("Promise 4", 1000),
    delayedPromise("Promise 5", 2500),
  ]; 
  Promise.all(promisesArray)
    .then(results => {
      console.log("усі", results);
    })
    .catch(error => {
      console.error("Error all:", error);
    });
  // 2
function randomDelay(value) {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  const promisesArrayRace = [
    randomDelay("Promise 1"),
    randomDelay("Promise 2"),
    randomDelay("Promise 3"),
    randomDelay("Promise 4"),
    randomDelay("Promise 5"),
  ];
  Promise.race(promisesArrayRace)
    .then(result => {
      console.log("найбистріший", result);
    })
    .catch(error => {
      console.error("Error race:", error);
    });
  