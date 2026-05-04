function groupByGroup(students){
  let map = new Map();
for(let i=0;i<students.length;++i){
  let groups = students[i].group;
  let names = students[i].name;
  if(!map.has(groups)){
    map.set(groups,[]);
  }
  map.get(groups).push(names);
}
return map;
}
const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];

// Expected Output
console.log(groupByGroup(students));
// Map(2) {
//   'A' => ['John', 'Max'],
//   'B' => ['Anna']
// }