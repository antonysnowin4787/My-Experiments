// Arrays

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); 

fruits.push('date');
fruits.splice(1, 1);
console.log(fruits);

// Joining Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined1 = arr1.concat(arr2);
console.log(combined1);

const combined2 = [...arr1, ...arr2];
console.log(combined2);

const combined3 = arr1.join()
console.log(combined3);
const newArr= combined3.split(',')
console.log(newArr);

// Multi-dimensional Arrays

const Arr1=[1,2,3]
const Arr2=[4,5,6]
const Arr3=[7,8,9]

console.log(Arr1[0],Arr2[1],Arr3[2]);