function show() {
 return this.name;
}

const a = { name: "A" };
const b = { name: "B" };
const fn = show.bind(a);

console.log(fn.call(b));//A որովհետև մենք սկզբից bind ենք արել ու այն մնում է անփոփոխ;
