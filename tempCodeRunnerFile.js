let obj = [{name: "A", email: "b" }]
obj[0].city = "kkk";
let newobj = obj.map((e)=>{ return e.city = "a"})
console.log('====================================');
console.log(newobj[0]);
