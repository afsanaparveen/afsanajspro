let users=["anil","afsana","praveen"]
users.push("sita");
//users.push(2);gives an error
console.log(users);
let b:number[]=[1,2,3,4,5,6,6,7,]
b.push(100);
console.log(b);

let d:any=["afsana",1,"parveen"];
console.log(d);
//type inference typescript can infer the type of an array if it has values
let names:readonly string[]=["dylan"];
//names.push("james");gives an error
console.log(names);
//tuple in array is typed array with predefined length and type
let ourTuple:[number,boolean,string];
ourTuple=[2,true,"afsana"];
console.log(ourTuple);
//named tuples
const graph:[x:number,y:number]=[5,4];
console.log(graph);
let e:string[]=["rama","sita"];
console.log(e);
