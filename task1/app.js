const fs = require("fs");

const person = {
  fname: "mahmoud",
  lname: "ragab",
  age: 21,
  city: "alex",
};

console.log(person);

let jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

fs.writeFileSync("persons.json", jsonPerson);

const readJsonFile = fs.readFileSync("persons.json").toString();
console.log(readJsonFile);

person.fname = "adel";
person.lname = "ahmed";
person.age = "40";
person.city = "cairo";

let updatedJsonPerson = JSON.stringify(person);
console.log(updatedJsonPerson);

fs.writeFileSync("persons.json", updatedJsonPerson);
