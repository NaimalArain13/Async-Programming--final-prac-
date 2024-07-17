//Understanding Promises
let promise = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Writing function for Promise chaining to achieve concurrency
function Washing() {
  console.log("Washing Started...!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Washing done.");
    }, 5000);
  });
}
function Soaking() {
  console.log("Soaking Started...!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Soaking done.");
    }, 3000);
  });
}
function Drying() {
  console.log("Drying Started...!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Drying done.");
      //     if(Math.floor(Math.random()*10) < 5){
      //     resolve("Drying Done")
      //  }else{
      //     reject("There is a glitch")
      //  }
    }, 2000);
  });
}

//Invoking the functions
console.log("Folding Clothes");

Washing()
  .then((value) => {
    console.log(value);
    return Soaking();
  })
  .then((value) => {
    console.log(value);
    return Drying();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("I am making Biryani");

//Promise chaining with a single function
function promiseChain(action: string, delay: number) {
  let newPromise: Promise<void> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(action);
      resolve();
    }, delay);
  });
  return newPromise;
}

//promise chaining
console.log("Dancing started...");
promiseChain("Dancing", 5000).then(() => {
  console.log("Running Started...");
  promiseChain("Running", 1000).then(() => {
    console.log("Hiking Started...");
    promiseChain("Hiking", 2000);
  });
});

//Same result achieve with async-await
async function runWashingMachine() {
  try {
    const result1 = await Washing();
    console.log(result1);
    const result2 = await Soaking();
    console.log(result2);
    const result3 = await Drying();
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}
console.log("Folding Clothes");
runWashingMachine();
console.log("I am making Biryani");

//Understanding the execution flow of .then() and .catch()
let newPromise: Promise<string> = new Promise((resolve, reject) => {
  // resolve("success")
  reject("error");
});
newPromise
  .then((abc) => {
    console.log(abc);
  })
  .then(() => {
    console.log("then 1");
  })
  .then(() => {
    console.log("then 2");
  })
  .then(() => {
    console.log("then 3");
  })
  .catch(() => {
    console.log("error 1");
  })
  .then(() => {
    console.log("then 4");
  })
  .finally(() => {
    console.log("finally");
  });