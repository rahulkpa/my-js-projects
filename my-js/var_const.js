const accountId= 12345
var fullName= "rahul kumar pandey" /** Please don't use var as it can not be managed in block/functional scope */
let city="Azamagarh"
age="12"
//accountId = 23 //Not Allowed
console.log("accountId= "+accountId)

console.table([accountId, fullName, city, age]) // print value in tabular format

city="Bengaluru"
age= "55"
fullName="Rahul Kumar Pandey"
console.log("After update printing value")

console.table([accountId, fullName, city, age]) // print value in tabular format