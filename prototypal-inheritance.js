let arr = ["jitu", "Jack"]

Function.prototype.mybind = function () {
    console.log('Test Bind prototype');
}

function fun2() {
    
}

// arr.__proto__.con

let obj  = {User:"Jitu", 
            name:"Andrew",
            city:"Dehradun",
            getIntro: function() {
                console.log(`${this.name} from ${this.city}` );
            }
           
           }

// If  we assign object 1 as the prototype of object 2, it will inherit all the properties of object1 
// 

let obj2  = {name:"Kumar"}

function fun() {
    console.log('TTT');
}



obj2.__proto__ = obj

