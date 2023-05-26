const person ={
    firstName: "Jabed",
    lastName: "Hasan",
    age : 50,
    eyeColor : "blue"
}

console.log(person.eyeColor);//blue
console.log(person["firstName"]);



const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ],
    start : function (){
        return this.name

    }
  }

  myObj.data="some";
  myObj.drive=function(){
    
  }
  console.log(myObj);
console.log(myObj.start());
  console.log(myObj.cars[0].models[0]);