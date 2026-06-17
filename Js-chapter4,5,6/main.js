// Numbers //
const Myvar="423";
const Myvari="345.34aaaaa"
const Mynum=23;
const Myfloat1=34.5300;
const Myfloat2=23.00;


console.log(Mynum === Myfloat2);
console.log(Myvar+3);
console.log(Mynum+3);
console.log(Number(true)+3);
console.log(Number.isInteger(Myvar));
console.log(Number.parseFloat(Myvari));
console.log(Number.parseFloat(Myfloat1).toFixed(1));

console.log(Number.isNaN("Antony"));
console.log(isNaN("Name"));


//Math Methods And Properties //
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.8));
console.log(Math.pow(3,4));
console.log(Math.min(10,20,42,5,53,23,42));
console.log(Math.max(10,20,42,5,53,23,42));
console.log(Math.random());
console.log(Math.floor(Math.random()*10));

const Myname="Antony-Snowin";

console.log(Myname.charAt((Math.floor(Math.random()*Myname.length))));