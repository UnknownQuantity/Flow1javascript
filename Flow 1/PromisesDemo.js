/*
    A promise is a container for a future value. 
    This means that when a promise is run, it will return later with a value, if it is not the value we wanted to finde, the promise will 
    reject however, if it can find what we're looking for, it will resolve it.

    A real world example could f.eks. ordering someting online. The receipt is a promise from the company that the package (value) will be
    delivered to you.

    A promise is 'final' meaning that the promise can only succeed or fail once and cannot switch to the other either. This means that calling
    a .then() function on the promise will always return the same value, no matter where in the code it is being called.

    Promises is executed immediately, this means that wrapping them in a function, allows us to control when the promise should execute. 

    The .then() and .catch() functions both return a promise, this means that .then() and .catch() can be chained if a set of promises depends
    on each other.


*/

//pyramid of doom
function one() {
  setTimeout(function() {
    console.log('1. First thing setting up second thing');
    setTimeout(function() {
      console.log('2. Second thing setting up third thing');
      setTimeout(function() {
        console.log('3. Third thing setting up fourth thing');
        setTimeout(function() {
          console.log('4. Fourth thing');
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
};


//resolving pyramid of doom
var two = new Promise(function(resolve,reject) {
setTimeout(function() {
    resolve('1. First thing setting up second thing')
},2000)
});

two.then(function(resolve,reject) {
    setTimeout(function() {
        resolve('2. Second thing setting up third thing')
    },2000)
    })
    .then(function(resolve,reject) {
        setTimeout(function() {
            resolve('3. Third thing setting up fourth thing')
        },2000)
        })
    .then(function(resolve,reject) {
            setTimeout(function() {
                resolve('4. Fourth thing')
            },2000)
            });


            //example of async with in serial and parallel
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
            //Time each of the two strategies
            //serial(50);
            parallel(50);

    
             //example of own promise-solution
    const url = "https://swapi.co/api/people/1";            
            fetch(url)
            .then(res=>{
                if(res.status >= 400){
                    return Promise.reject({status:res.status, fullError:res.json()})
                }
                return res.json()
            })
            .then(data=>console.log("OK",data))
            .catch(e=>{
                if(e.status) {
                    e.fullError.then(msg=>console.log("Fejl", msg))
                }else {
                console.log("Fejl",e)
            }})
            .finally(()=>console.log("Finally got here"))
            
            /*
            rejected, resolved, pending - states of promises
            */

/*
    Error handling is made with the reject part of the promise. If the promise cannot resolve, it will simply reject it, in this case with
    an error that tells the user that it has failed.
*/
var three = new Promise(function(resolve,reject) {

    if(Math.random() * 100 <= 90) {
        resolve('That was great!');
    }
    reject(new Error('I failed!'));
});

