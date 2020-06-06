const posts = [
    { title: 'Post One', body: 'Post One Body' },
    { title: 'Post Two', body: 'Post Two Body' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolveFunc123, rejectFunc123) => {
        setTimeout(() => {
            posts.push(post);
            if (true){
                resolveFunc123('git majonez');
            }
            rejectFunc123('nie udalo sie');
        }, 2000);        
    });
}

createPost({title: 'asdasd', body: '123144'})
    .then(getPosts)
    .catch((err) => console.log(err));

// Promise is an object that takes 2 methods, first one to be invoked if everything is fine, 
// second one to invoke if something went wrong
// but to be honest it looks like a normal method with 2 other methods in param
// but we can use to set it up when we want to invoke something else after process ends successfuly
// and somehting else when process ends not successfuly
// so its still useful to not create wrapper method each time


// IMPORTANT ABOUT PROMISES 
// IMPORTANT ABOUT PROMISES 
// IMPORTANT ABOUT PROMISES 
// YOU CAN ACTUALLY USE THEM AS TASKS SO THAT YOU CAN INVOKE LIST OF ALL PROMISES
let listOfPromises = [];

function something() {
    // this should happen when all the promises are successful
}

function somethingElse() {
    // this should happen when all the promises are NOT successful
}

Promise.all(listOfPromises) // IN PROMISE ALL, ALL OF THEM HAVE TO BE RESOLVED
    .then(something)
    .catch(somethingElse);

Promise.allSettled(listOfPromises) // This will wait for all even if some of them are rejected !!!
    .then(something)
    .catch(somethingElse);


// you dont need to use brackets for lambdas
//    .catch ((err) => console.log(err));
//    .catch (err => console.log(err)); // its the same
