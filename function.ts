function cal():number
{
    return 100;
}
console.log(cal());
//defining type to the parameter
function val(a:number):number{
    return a;
}
console.log(val(3));
function add(a:number,b:number):number{
    return a+b;
}
console.log(add(2,5));
//if second parameter is optional
function sub(a:number,b?:number):number{
    return b?a+b:a;
}
console.log(sub(3));