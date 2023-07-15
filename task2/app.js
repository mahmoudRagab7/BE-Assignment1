const fs = require("fs");
const yargs = require("yargs");
const functions = require("./functions");

yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    id: {
      describe: "adding the id",
      demandOption: true,
      type: "string",
    },
    fname: {
      describe: "adding the first name ",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "adding the last name ",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "adding the age",
      demandOption: true,
      type: "string",
    },
    city: {
      describe: "adding the city",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    functions.addPerson(x.fname, x.lname, x.city, x.age, x.id);
  },
});

yargs.command({
  command: "delete",
  describe: "to delete an item",
  handler: (x) => {
    functions.deleteData(x.id);
  },
});

yargs.command({
  command: "list",
  describe: "list data",
  handler: () => {
    functions.listData();
  },
});

yargs.command({
  command: "read",
  describe: "to read data",
  builder: {
    id: {
      describe: "this is id description in read command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    functions.readPerson(x.id);
  },
});

yargs.parse();
