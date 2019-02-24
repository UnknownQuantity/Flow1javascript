/*
    Async, written before a function, means that the function will always return a promise, no matter what.
    So wrapping a non-promise function in an Async tag simply ensures that the return will be a promise.

    If a function is declared with async, another call is available: Await.
    Await makes JS wait until the promise returns its value.

    Await does the same thing as .then() (it gets the promise result and returns it, but it looks and reads better.)
*/

//example on async/await
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });  
    let result = await promise; // wait till the promise resolves (*)  
    alert(result); // "done!"
  }  
  f();

  //example of error handling with async/await

  async function task(cb) {
try{
    let a = await Math.random() + 5;
    if(a === 1) return cb('Was 1')
} catch(e) {
    return cb("wasn't 1" );
}
  }

task();





    //example of async/await in serial
const fetch = require("node-fetch");

async function serial(count) {
const swappiPeople = [];
    for (let i = 1; i <= count; i++) {
        swappiPeople.push(
            //Observe the await
            await fetch("http://api.icndb.com/jokes/random")
            .then(res => { return res.json() }));
             }
             console.log(swappiPeople.map(p=>p.value.joke).join("\n"));
            }
            serial(50);

//example of async/await in parallel

            async function parallel(count) {
             const swappiPeople = [];
             for (let i = 1; i <= count; i++) {
               swappiPeople.push(
                 //Observe no await
                 fetch("http://api.icndb.com/jokes/random" )
                   .then(res => { return res.json() }));
             }
             const allEntries = await Promise.all(swappiPeople);
             console.log(allEntries.map(p=>p.value.joke).join("\n")); 
             }
            parallel(50);




            //closures and module pattern, user-defined reusable modules, es-next, 