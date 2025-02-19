const camera = {
  price: 600,
  weight: 2000,
  myDesc() {
    return `This canon camera of ${this.price} and weight is ${this.weight}`;
  },
};

// arrow function pointing global object
console.log(camera.myDesc());

const sayHello = (name) => console.log("Hey " + name);

console.log(sayHello("Jitendra"));

const todos = [
  {
    title: "Tast1",
    isDone: true,
  },
  {
    title: "Tast2",
    isDone: true,
  },
  {
    title: "Tast3",
    isDone: false,
  },
];

const newList = todos.filter((x) => {
  return x.isDone === true;
});

console.log(newList, "newList");
