var users = ["anil", "afsana", "praveen"];
users.push("sita");
//users.push(2);gives an error
console.log(users);
var b = [1, 2, 3, 4, 5, 6, 6, 7,];
b.push(100);
console.log(b);
var d = ["afsana", 1, "parveen"];
console.log(d);
//type inference typescript can infer the type of an array if it has values
var names = ["dylan"];
//names.push("james");gives an error
console.log(names);
//tuple in array is typed array with predefined length and type
var ourTuple;
ourTuple = [2, true, "afsana"];
console.log(ourTuple);
//named tuples
var graph = [5, 4];
console.log(graph);
var e = ["rama", "sita"];
console.log(e);
