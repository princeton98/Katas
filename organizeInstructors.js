const organizeInstructors = function(instructors) {
  // go through array,
  // grab name and course
  // if course doesnt already exist in finalOutput, create the new key
  // push name onto the key(value is an array)
  finalOutput = {}
  for (let instructor of instructors) {
    if (!finalOutput[instructor.course]) {
      finalOutput[instructor.course] = [instructor.name];
    }
    else {
      finalOutput[instructor.course].push(instructor.name)
    }
  }
  return finalOutput;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));