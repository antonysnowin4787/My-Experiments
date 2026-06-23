// Loops //
// while loop //

let i=1;
while(i<=50){
    console.log(i);
    i++;
}

// For loop //
const Name="Antony";

for(let j=1; j<=Name.length; j++){
    console.log(Name.charAt(j-1));
}

// Continue & Break //

let k=1;
for (k=1; k<=10; k++){
    if(k==5){
        continue;
    }
    if(k==8){
        break;
    }
    console.log(k);
  }