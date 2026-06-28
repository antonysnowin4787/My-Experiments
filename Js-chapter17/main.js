//  Objects
// key--value pairs
const person = {
    name: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    subdivisions: {"High School": "Central High", "College": "State University"},
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.subdivisions["College"]);
person.greet();

// inheritance
const employee = Object.create(person);
employee.name = 'Alice';
employee.position = 'Software Engineer';
employee.Company = 'Tech Corp'
console.log(employee.name);
console.log(employee.position);
console.log(employee.Company);

const Ron = Object.create(employee);

Ron.name = 'Bob';
Ron.position = 'Data Scientist';
Ron.Company = 'Data Inc';
Ron.Skills = ['Python', 'Machine Learning', 'Data Analysis'];
for ( detail in Ron) {
    if (Ron.hasOwnProperty(detail)) {
        console.log(detail + ': ' + Ron[detail]);
    }
}

// deconstructuring
const { name, age, hobbies } = person;
console.log(name);
console.log(age);
console.log(hobbies);