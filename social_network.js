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
}

const printAll = function (data) {
  //output a list (object)
  //iterate over data object
  //grab name, insert that into new object
  //follows: iterate through follows array, grab id, match it to name, and push that name into follows object
  //following: iterate over everyone's follows, check if it matches with their id, push their name onto the following key
  let newObj = {};
  for (let key in data) {
    newObj[data[key].name] = {following: [], followers: []};
    //followers
    for (let person of data[key].follows) {
      newObj[data[key].name].followers.push(data[person].name);
    }
  }
  //following
  for (let key1 in data) {
    for (let follow of data[key1].follows) {
     newObj[data[follow].name].following.push(data[key1].name);
    }
  } 
  return newObj;
}

const unrequitedFollowers = function(data) {
  // list of names (array)
  // use previous function
  // check following and followers, if a name is not in both, push obj.name into array
  let names = [];
  let obj = printAll(data);
  for (let person in obj) {
    for (let follow of obj[person].following) {
      if (!obj[person].followers.includes(follow) && !names.includes(person)) {
        names.push(person);
      }
    }
  }
  return names;
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
console.log(mostPopular(data));
console.log(printAll(data));
console.log(unrequitedFollowers(data));