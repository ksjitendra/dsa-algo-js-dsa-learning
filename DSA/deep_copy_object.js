let obj = {
    name : "Jack"
}

// Shallo copy 
// when object have more level, in that case destructing or object.assign will not work 
let newObj = Object.assign({}, obj)

newObj.name = "John"

console.log(obj);

let test = {
    name: "Jesse",
    address : {
        city: "dehradun", 
        state: "UK"
    }
}

// Creating issue in multi level object 
// let newUser = {...test}
// newUser.address.city = "Delhi"

// deep copy approach 
// disadvantage of deep copy 
// if my object have any function or date, and I am doing it json. stringify, it will remove function or date if exist
// solution to it - https://www.npmjs.com/package/lodash 

// let user2 = JSON.parse(JSON.stringify(test)) 

// user2.address.city = "noida"

let user2  = _.cloneDeep(test)
user2.address.city = "Banglore"

console.log(user2);

// in shallo copy on the main object will copy 
// shallo copy ways - object.assign / object destructring 
// in deep copy we copy the nested object as well 
// json. parse but function and date will not work here as well. 
// so we can use lodash library we can use 