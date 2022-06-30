/*here we learn about inhertance wt is inheritance make child class parent class inherit a class*/
class Parent 
{
    name="";
    setName(name)
    {
        return this.name=name;
    }
}

class Child extends Parent 
{
    getName(){
        return this.name;
    }

}
let c1=new Child();
c1.setName("afsana");
console.log(c1.getName());
