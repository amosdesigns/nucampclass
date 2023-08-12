class Dog {
  constructor(name, breed, email) {
    this.name = name;
    this.breed = breed;
    this.email = email;
  }
}

class DogPark {
  constructor(name, location, dogs = []) {
    this.name = name;
    this.location = location;
    this.dogs = dogs;
  }
  registerDog(dogToRegister) {
    if (!dogToRegister.name || !dogToRegister.email) {
      console.error("ERROR: Dog must have a name and email to be registered");
      return false;
    }
    for (let i = 0; i < this.dogs.length; i++) {
      if (this.dogs[i].name === dogToRegister.name) {
        console.error(`ERROR: Dog already registered`);
        return false;
      }
      this.dogs.push(dogToRegister);
      console.log(`SUCCESS: ${dogToRegister.name} registered`);
      return true;
    }
  }

  addDog(dog) {
    this.dogs.push(dog);
  }

  printDogs() {
    if (this.dogs.length === 0) {
      console.error("There are no dogs registered to ${this.name}");
    } else {
      console.table(this.dogs);
      return true;
    }
  }
}
