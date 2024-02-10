let obj = [{name: "A", email: "b" }]
obj[0].city = "kkk";
let newobj = obj.map((e)=>{ return e.city = "a"})
console.log('====================================');
console.log(newobj[0]);

import { log } from "console";

// console.log('====================================');
const user = [{userId:"1",name:'A', email:'b'}]
const job = [{userId:"1",jobId:'1'}, {userId:"1",jobId:'2'}]

// for (let index = 0; index < user.length; index++) {
//       let count =0;
//     for (let j = 0; j < job.length; j++) {
//         if(job[i].userId == user[index].userId){
//             count++;
//         }
        
//     }
//     console.log(user[index].name + " " + user[index].name)
// }
