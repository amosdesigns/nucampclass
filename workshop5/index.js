class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(studentToRegister) {
    if (!studentToRegister.name || !studentToRegister.email) {
      console.error(
        "ERROR: Invalid name or email - Student must have a name and email to be registered"
      );
      return false;
    }

    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === studentToRegister.name) {
        console.error(`ERROR: Dupe student or Student already registered`);
        return false;
      }
    }
    this.students.push(studentToRegister);
    console.log(`SUCCESS: ${studentToRegister.name} registered`);
    return true;
  }

  listStudents() {
    if (this.students.length === 0) {
      console.error(`There are no students registered to ${this.name}`);
    } else {
      console.table(this.students);
      return true;
    }
  }
}

////// TESTING //////
console.clear();
const testStudent = new Student("Bugs Bunny", "bugs@bunny.com");

if (
  testStudent.name === "Bugs Bunny" &&
  testStudent.email === "bugs@bunny.com"
) {
  console.log("TASK 1: PASS");
}
////// TESTING 2//////
const reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (
  reactBootcamp.name === "React" &&
  reactBootcamp.level === "Advanced" &&
  Array.isArray(reactBootcamp.students) &&
  reactBootcamp.students.length === 0
) {
  console.log("TASK 2: PASS");
}
////// TESTING 3//////
const runTest = (bootcamp, student) => {
  const attemptOne = bootcamp.registerStudent(student);
  const attemptTwo = bootcamp.registerStudent(student);
  const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
  if (attemptOne && !attemptTwo && !attemptThree) {
    console.log("TASK 3: PASS");
  }

  bootcamp.registerStudent(new Student("Babs Bunny", "babs@bunny.com"));
  if (bootcamp.listStudents()) {
    console.log("TASK 4: PASS 1/2");
  }
  bootcamp.students = [];
  if (!bootcamp.listStudents()) 
    console.log("TASK 4: PASS 2/2");
};
  
runTest(reactBootcamp, testStudent);
