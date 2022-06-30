class App{
    name:string;      //constructor using
    constructor(name){
        this.name=name;
    }
    getName()
{
        return this.name;
    }
}
let a=new App("afsana parveen");
console.log(a.name);
class App1{
    age=19;
    getName()       //method
    {
        return this.age;
    }
}
let b=new App1();
console.log(b.age);
