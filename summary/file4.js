 let weakmap = new WeakMap();

function addLike(post, user){

if(!weakmap.has(post)){
   weakmap.set(post,[]);
}
 weakmap.get(post).push(user);

}

function getLikes(post){
if(weakmap.has(post)){
   return weakmap.get(post);
}
return [];
}

// Input
let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };

addLike(post1, 'John');
addLike(post1, 'Anna');

// Expected Output
console.log(getLikes(post1)); // ['John', 'Anna']
console.log(getLikes(post2)); // [] or undefined