// Alice is a prospective member excited to join your platform. She wants to explore hobbyist forums that align with her interests in gardening, cooking, and woodworking. As Alice begins the registration process, she finds herself confused about the requirements for choosing a username, password, and email address.


// The goal of your challenge is to make this process seamless for Alice and countless others by creating clear validation rules:

// Username: Must be at least 5 characters long.
// Password: Must be at least 8 characters long and contain at least one number.
// Email: Must contain an "@" character.
// By building an efficient and robust validation system using error handling, you'll prevent improper registrations and provide clear feedback when a user, like Alice, doesn't meet the criteria.

// Objectives
// In this challenge, you will be tasked with creating a series of validation functions for a user registration system. 
// Each function will handle a different aspect of validation, such as username length, email format, or age restrictions.
// The goal of this challenge is to practice error handling using the try-catch-finally mechanism in JavaScript.
//////////////////////////////////////////////////////////////////////////////

// Task 1: Validate Username
function validateUsername(username) {
  // Write code to check if the username is at least 5 characters long.
  // If the username is not valid, throw an error with a message.
}

// Task 2: Validate Password
function validatePassword(password) {
  // Write code to check if the password is at least 8 characters long and contains at least one number.
  // If the password is not valid, throw an error with a message.
}

// Task 3: Validate Email
function validateEmail(email) {
  // Write code to check if the email contains an '@' symbol.
  // If the email is not valid, throw an error with a message.
}

// Task 4: Validate User
function validateUser(user) {
  // Use the above validation functions to validate the user's username, password, and email.
  // If any validation fails, log the error and return false. Otherwise, return true.
}









//----------------------------- TESTS --------------------------------------------
// Do not modify the below code -- this is test code that will help you determine if you completed each task correctly. Be sure to open the console to see the test messages.

//test function
function testValidation() {
  function runTest(description, testFunc, expectError = false) {
    try {
      const result = testFunc();
      if (expectError) {
        console.error(`${description} failed. Expected an error but did not receive one.`);
      } else if (result) {
        console.log(`${description} passed.`);
      } else {
        console.error(`${description} failed.`);
      }
    } catch (e) {
      if (expectError) {
        console.log(`${description} passed. Received an expected error.`);
      } else {
        console.error(`${description} threw an unexpected error:`, e.message);
      }
    }
  }
  
  //test case data - these are objects!
  const user1 = {username: "john", password: "Password1", email: "john@example.com"}; //should fail (username)
  const user2 = {username: "janedoe", password: "Password", email: "jane@example.com"}; //should fail (password missing number)
  const user3 = {username: "juliadoe", password: "Pword1", email: "julia@example.com"}; //should fail (password too short)
  const user4 = {username: "jamaldoe", password: "Password1", email: "jamal.example.com"}; //should fail (email)
  
  //tests
  runTest("Username validation - short username", () => validateUsername(user1.username), true); // Expects an error
  runTest("Password validation - missing number", () => validatePassword(user2.password), true); // Expects an error
  runTest("Password validation - too short", () => validatePassword(user3.password), true); // Expects an error
  runTest("Email validation - missing @ symbol", () => validateEmail(user4.email), true); // Expects an error
  runTest("User validation", () => {
    return !validateUser(user1) && // short username, expects an error
      !validateUser(user2) && // missing number in password, expects an error
      !validateUser(user3) && // password too short, expects an error
      !validateUser(user4);   // missing @ in email, expects an error
  });
}

console.clear();
testValidation();