//Casting is the process of overriding a type.
//A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
let x: unknown = 'hello';

console.log((x as string).length);
let y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length
/*Casting with <>
Using <> works the same as casting with as.*/

let z: unknown = 'hello';
console.log((<string>z).length);
/*orce casting
To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.*/


let v = 'hello';
console.log(((v as unknown) as number).length); // v is not actually a number so this will return undefined
