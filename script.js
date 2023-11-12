1.
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log("Sum of the elements:", sum);
2.
let peopleArray = [
    { name: "John Doe", age: 25, address: "123 Main St" },
    { name: "Jane Smith", age: 30, address: "456 Oak St" },
    { name: "Bob Johnson", age: 22, address: "789 Pine St" }
  ];
console.log(peopleArray);

3.
let people = [
  { name: "John Doe", age: 25, address: "123 Main St" },
  { name: "Jane Smith", age: 30, address: "456 Oak St" },
  { name: "Bob Johnson", age: 22, address: "789 Pine St" }
];
let name0 = people[0].name;
let age0 = people[0].age;
let address0 = people[0].address;
console.log(`My name is ${name0}, My age is ${age0}, My address is ${address0}`);

4.
let ageAtIndex1 = peopleArray[1].age;
if (ageAtIndex1 < 19) {
  console.log("I am a teenager");
} else {
  console.log("I am an adult");
}

5.
let numbersArray = [10, 20, 30, 40, 50];
for (let i = 0; i < numbersArray.length; i++) {
  console.log("Element at index " + i + ":", numbersArray[i]);
}
6.
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}





