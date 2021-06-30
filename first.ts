let age:number = 22;
let club:string;
club = "Barcelona";
const isFamous:boolean = false;
let isTrue:boolean;

function fullName(firstName:string, lastName:string):string{
    return firstName + " " + lastName;
}
const user:string = fullName("Martin", "Gub");

function doubleItAndConsole(num:number):void{
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log(output);

const multiply = (x:number, y:number):number => x * y;           // x:any / x:number | string
console.log(multiply(23, 20));

let multiply2: (a:number, b:number) => number;
multiply2 = (a, b) => a * b;
console.log(multiply2(2, 3));

const numbers:number[] = [2, 3, 44, 55, 66, 43];
numbers.push(68);

const friends:string[] = ['Bill', 'Mark', 'Martin', 'Watson', 'Steven', "Smith", 'David', "Warner", 'Taylor'];
let megaName:string = '';
for (let i = 0; i < friends.length; i++) {
    const friend:string = friends[i];
    if(friend.length > megaName.length){
        megaName = friend;
    }
}
console.log("largest name of the friend ", megaName);

// Objects
let friend: {
    name:string
    age:number
}
friend = {
    name:"Steven Smith",
    age: 33
}
const player: {
    club:string,
    salary:number
} = {
    club: "Barcelona",
    salary: 45000
}

interface player{
    club: string,
    name: string,
    salary: number,
    isPlaying: boolean,
    wife?: string
}
const messi: player = {
    club:"FC Barcelona",
    name: "Lionel Messi",
    salary: 450000000,
    isPlaying: true,
    wife : "Yes"
}
const pique: player = {
    club:"FC Barcelona",
    name: "Steven Smith",
    salary: 450000000,
    isPlaying: true,
}

function getBonus(player: player, friend: string[]){
    return player.salary * 0.1;
}
getBonus(messi, ["Martin", "Brat"]);

// class
class Person{
    name: string;
    private _partner: string;    // access only in Person class inside
    readonly fatherName: string;
    constructor(name: string, fName:string){
        this.name = name;
        this._partner = name;
        this.fatherName = fName;
    }
    getName(): string{
        return this.name + " " + this._partner;
    }
}
const sam = new Person("Sam Curran", "Tom Curran");
console.log(sam.name, sam.fatherName);
sam.name = "Gan Curran";
// sam.fatherName ="Gem Curran" read only not changeable
const samName: string = sam.getName();
console.log(samName);