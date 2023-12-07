function S(n) {
  if (n <= 0) return "The number can't be negative";
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(S(5));

function Fibonacci(n) {
	let a = 0;
	let b = 1;

	for (let i = 3; i <= n; i++) {
			let temp = a + b;
			a =  b;
			b = temp;
	}

	return b;
}

function Fibonacci1(n) {
  if (n <= 0) return "the number should be positive";
  if (n == 1) return 0;
  if (n == 2) return 1;
  let sum1 = 0;
  let sum2 = 1;
  let sum;
  for (let i = 3; i <= n; i++) {
    sum = sum1 + sum2;
    sum1 = sum2;
    sum2 = sum;
  }
  return sum;
}
// console.log(Fibonacci1(5));

class Person {
  constructor(firstName, lastName, age, profession= 'programmer') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.profession = profession;
  }
  email() {
    return this.firstName + "." + this.lastName + "@gmail.com";
  }
	incrementAge(){
		return this.age+1
	}
}

let person1 = new Person("Joe", "Rogan", 53, "commentator");
let person2 = new Person("Jessica", "Mortensen", 24, "nurse");
let person3 = new Person("Jessica", "Mortensen", 23, );

console.log(person2);


console.log(person1.incrementAge());

