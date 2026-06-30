// JSON files
// Used To Send And Recieve Data From The Server
const myyobj={
    name:"Antony",
    Age: 25,
    Skills: ["JavaScript", "Python", "C++"] ,
    Details: function(){
        return this.name + " is " + this.Age + " years old and has skills in " + this.Skills.join(", ");
    }
}

console.log(myyobj);
console.log(myyobj.name);
myyobj.Details();

const myJSON = JSON.stringify(myyobj);
console.log(myJSON);
console.log(typeof myJSON);

const myObj = JSON.parse(myJSON);
console.log(myObj);
console.log(typeof myObj);