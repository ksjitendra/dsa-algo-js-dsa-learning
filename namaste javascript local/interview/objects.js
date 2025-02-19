// object a collection of similiar data
// we store functionality as well inside object not only data
// we can store different type of data

// const always impact main value of any variable not any key value pair which is existing
// inside the object

let key = "address";
const user = {
  name: "kumar",
  city: "dehradun",
  getData: function () {
    return this["pin code"];
  },
  inner: {
    name: "jitendra",
  },
  ["test prop"]: "Test Val",
  [key]: "Dehradun",
};
let member = {};

user.name = "Jitendra";
user.profession = "Engineer";
user["pin code"] = 234321;
delete user.city;
console.log(user);

let;
