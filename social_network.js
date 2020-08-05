const biggestFollower = function (data) {
  //loop through object
  // if old number is less than new number, change the numbers and add the name of the person to a variable
  let followers = 0;
  let bigName = "";
  for (let key in data) {
    if (data[key].follows.length > followers) {
      followers = data[key].follows.length;
      bigName = data[key].name;
    }
  }
  return bigName;
}

const mostPopular = function (data) {
  //loop through object
  // add every key id into new object
  // go into follows array, loop through array, if keyid is in array, add one to new object
  let newObj = {};
  for (let key in data) {
    for (let follow of data[key].follows) {
      if (!newObj[follow]) {
        newObj[follow] = null;
      }
      for (let key1 in data){
        if (follow === key1) {
          newObj[key1] += 1
        }
      }
    }
  }
  let popular = ""
  let followers = 0;
  for (let person in newObj) {
    if (followers < newObj[person]) {
      followers = newObj[person];
      popular = data[person].name;
    }
  }
  return popular;
  console.log(newObj);
}

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

console.log(biggestFollower(data));
mostPopular(data);