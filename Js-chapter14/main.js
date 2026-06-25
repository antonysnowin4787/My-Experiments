// Scope var,let,const

//Global Scope
var x=1;
let y=2;
const z=3;

console.log (`Global Scope Before Changes: x=${x}, y=${y}, z=${z}`);

function myfunc(){
  const z=5;
  console.log (`Function Scope: x=${x}, y=${y}, z=${z}`);

  if (true){
    let y=10;
    console.log (`Block Scope: x=${x}, y=${y}, z=${z}`);
  }
}
myfunc();
console.log (`Global Scope After Changes :x=${x}, y=${y}, z=${z}`);