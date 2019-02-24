/*
Types in TypeScript is declared slightly differently than in JavaScript, 
with a colon and the name of the type the (usually)let is supposed to be. 
Strings which spans multiple lines and expressions are surrounded by the backtick ` ` character.
"Regular" strings still uses ' ' or " " eg. let color: string = "blue";
*/
//Strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. 
I'll be ${ age + 1 } years old next month.`;

//Arrays
let list: Array<number> = [1, 2, 3]; //<number> being the type of array, elemType. 


//Type assertion - when YOU, the programmer, knows the expected result
//any  keyword means we do not type check, we just let it compile, and then we handle later on. 
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length; //can also be written as: (someValue as string).length



/*
The TypeScript interface is much like the interface from Java,
and is used to provide a structure for deriving classes. 
the interface is a syntactical contract that an entity should follow.
Interfaces define properties and methods.
You can also mark interface properties as optional by using a ? at the end of the property name,
as shown below in an otherwise standard interface implementation. 
*/

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});



/*
Classes in Typescript works the same way as in Java, with only minor differences in syntax.
The reason we use classes, is that they are like blueprints for creating objects,
they are our factories where we can produce a lot of instances of the class, 
and make sure that they live up to the same properties.
*/
    
interface IPerson{
    name: string;
}

interface IAddress{
    street: string;
}

function loggerV3(p:IPerson , a:IAddress){
    console.log(`Person: ${p.name}, Street: ${a.street}`)
    }

class Person implements IPerson {
    public name;
    constructor(name : string){
        this.name = name;
    }
}

class Address implements IAddress {
    public street;
    constructor(street : string){
        this.street = name;
    }
}

loggerV3(new Person("Kurt"), new Address("vejgade2"));


