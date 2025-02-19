
// we use new keyword to create and object in the functional way 

var OfficeStuff = function (chair, table) {

    this.chair = chair
    this.table = table 
    this.getDetails = function() {
        console.log(`We have in the office ${this.chair} and ${this.table}`);
    }
    
}
 
var test  = function(argu) {
     this.registration = function() {
        console.log(argu);
        return 1;
    }

    // console.log('Test function var', this.testVar);
}

var GoogleOffice  = OfficeStuff("Computer Chair", "Computer Table");

var test2  =  test("Argu");

console.log(test2.registration());
// console.log(GoogleOffice);