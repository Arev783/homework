function getUniqueUsers(users){

  let map = new Map();

  users.forEach(el => {
    map.set(el.id,el);
  });

 return Array.from(map.values());


}

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' },
  { id: 1, name: 'John' } // duplicate
];

// Expected Output
console.log(getUniqueUsers(users));
// [ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]