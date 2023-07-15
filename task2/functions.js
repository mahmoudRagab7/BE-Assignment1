const fs = require("fs");

const addPerson = (fname, lname, city, age, id) => {
  const allData = loadData();

  const duplicatedData = allData.filter((person) => {
    return person.id === id;
  });
  console.log(duplicatedData);
  if (duplicatedData.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname,
      city: city,
      age: age,
    });
    saveAllData(allData);
  } else {
    console.log("ERROR DUPLICATED ID");
  }
};

const loadData = () => {
  try {
    const jsonData = fs.readFileSync("persons.json").toString();
    return JSON.parse(jsonData);
  } catch {
    return [];
  }
};

const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData);
  fs.writeFileSync("persons.json", saveAllDataJson);
};

const deleteData = (id) => {
  const allData = loadData();

  const remainingData = allData.filter((persons) => {
    return persons.id !== id;
  });
  //   console.log(remainingData);
  saveAllData(remainingData);
};

const listData = () => {
  const allData = loadData();

  allData.forEach((person) => {
    console.log(person.fname, person.lname, person.city);
  });
};

const readPerson = (id) => {
  const allData = loadData();

  const intendedPerson = allData.find((person) => {
    return person.id == id;
  });
  console.log(intendedPerson);
};

module.exports = {
  addPerson,
  deleteData,
  listData,
  readPerson,
};
