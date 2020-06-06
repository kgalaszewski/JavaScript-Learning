// callbacks start from line 37, first we will go with basic solution

// const posts = [
//     { title: 'Post One', body: 'Post One Body' },
//     { title: 'Post Two', body: 'Post Two Body' }
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000); // 1000 is ms, which means after 1 sec from page being loaded, body will be replaced
// }

// function createPost(post) { // functions in javasript are asynchronous by default so that waiting lets other tasks process
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// createPost({title: 'Post Three', body: 'Post Three Body'})
// getPosts();

// setTimeout(() => {
//     getPosts();
// }, 1100);

// // explaination what happend here
// // 1. createPost was invoked with 2 sec delay, which does not work synchronously
// // 2. because of that, invoked getposts which is faster, because of 1000 to, will finish before createPost
// // 3. because of that, afterwords getPosts needs to be invoked again


// callback allows us to set another method that should be invoked, right after our method ends
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

function createPost(post, someCallBackFunction) {
    setTimeout(() => {
        posts.push(post);
        someCallBackFunction();
    }, 2000);
}

// in this case, it will go for create post, wait 2 sec, go for get posts, wait 1 sec and beng, works
createPost({title: 'Post Three', body: 'Post Three Body'}, getPosts);

