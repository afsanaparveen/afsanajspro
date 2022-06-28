let object={name:"peter",age:20,address:"USA"};
//object.name=100;gives an error
object.name="bruce";
console.log(object);
let value:any={name:"peter",age:20,address:"USA"};
//object.name=100;gives an error
value.name=100;
console.log(value);
//new property adding
interface hometype{
    name:string,age:number,address:string}

let home:hometype={name:"peter",age:20,address:"USA"};
//object.name=100;gives an error
home.name="raju";
console.log(home);
