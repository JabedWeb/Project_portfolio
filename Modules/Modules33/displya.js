const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  const data=Object.values(person);


  const str=JSON.stringify(person);

  console.log(str);

  console.log(data);