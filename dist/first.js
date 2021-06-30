"use strict";
let age = 22;
let club;
club = "Barcelona";
const isFamous = false;
let isTrue;
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName("Martin", "Gub");
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log(output);
const multiply = (x, y) => x * y; // x:any / x:number | string
console.log(multiply(23, 20));
let multiply2;
multiply2 = (a, b) => a * b;
console.log(multiply2(2, 3));
const numbers = [2, 3, 44, 55, 66, 43];
numbers.push(68);
const friends = ['Bill', 'Mark', 'Martin', 'Watson', 'Steven', "Smith", 'David', "Warner", 'Taylor'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("largest name of the friend ", megaName);
// Objects
let friend;
friend = {
    name: "Steven Smith",
    age: 33
};
const player = {
    club: "Barcelona",
    salary: 45000
};
const messi = {
    club: "FC Barcelona",
    name: "Lionel Messi",
    salary: 450000000,
    isPlaying: true,
    wife: "Yes"
};
const pique = {
    club: "FC Barcelona",
    name: "Steven Smith",
    salary: 450000000,
    isPlaying: true,
};
function getBonus(player, friend) {
    return player.salary * 0.1;
}
getBonus(messi, ["Martin", "Brat"]);
// class
class Person {
    constructor(name, fName) {
        this.name = name;
        this._partner = name;
        this.fatherName = fName;
    }
    getName() {
        return this.name + " " + this._partner;
    }
}
const sam = new Person("Sam Curran", "Tom Curran");
console.log(sam.name, sam.fatherName);
sam.name = "Gan Curran";
// sam.fatherName ="Gem Curran" read only not changeable
const samName = sam.getName();
console.log(samName);
