// Next-gen JS refresher
class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };

  /*
    constructor(){
      this.gender = 'male';
    }
  
    printGender() {
      console.log(this.gender);
    }
  */
}

class Person extends Human {
  name = 'Sam';
  gender = 'XY';

  //   constructor(){
  //     super();
  //     this.name = 'Sam';
  //     this.gender = 'female';
  //   }

  //   printMyName(){
  //     console.log(this.name);
  //   }

  printMyName = () => {
    console.log(this.name);
  };
}

// const person = new Person();
// person.printMyName();
// person.printGender();

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
// console.log(newNumbers);

const person = {
  name: 'Max',
};

const newPerson = {
  ...person,
  age: 28,
};

// console.log(newPerson);

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

// console.log(filter(1,2,3));

const [num1, , num3] = numbers;
// console.log(num1, num3);

const { name: nameEl } = { name: 'Max', age: 28 };
console.log(nameEl);
