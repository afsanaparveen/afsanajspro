function Users(data:string):string   //if datatype is defined
{
    return data;
}
console.log(Users("afsu"));
function User(data:number):number   //if datatype is defined
{
    return data;
}
console.log(User(19));
//if datatype is not defined
function Recieve<T>(data:T):T{
    return data;
}
console.log(Recieve({name:"afsu",age:19}));
function Reciever<T>(data:T):T{
    return data;
}
console.log(Reciever({name:"afsu",age:19}).name);
function Recievers<T>(data:T):T{
    return data;
}
console.log(Recievers({name:"afsu",age:19}).age);
