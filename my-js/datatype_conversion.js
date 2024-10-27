let age = 35

let appendValue = 67

console.log("method 1 printing my age data type ", typeof age)

console.log("method 2 printing my age data type ", typeof(age))

console.log("without conversion printing concatenated value ", age+appendValue)

//Now I want to convert this age to a String and want to perform some append operation  expecting value = 3567

let ageInString = String(age)

console.log("method 1 printing concatenated value ", ageInString+appendValue)

//convert a non number to a number and then check its data type

let myName = "12133ghd"

console.log("Scenario-1 checking name data type", typeof myName)

let numerology = Number(myName)

console.log("Scenario-1 after conversion want to check value: ", numerology) //printing NaN

console.log("Scenario-1 after conversion want to check data type: ", typeof(numerology))

//convert a null to a number and check its data type and value

let myName1 = null

console.log("Scenario-2 checking name data type", typeof myName1)

let numerology1 = Number(myName1)

console.log("Scenario-2 after conversion want to check null value: ", numerology1) //printing 0

console.log("Scenario-2 after conversion want to check null data type: ", typeof(numerology1)) //number


//convert a undefined to a number and check its data type and value

let myName2 = undefined

console.log("Scenario-3 checking name data type", typeof myName2)

let numerology2 = Number(myName2)

console.log("Scenario-3 after conversion want to check undefined value: ", numerology2) //printing NaN

console.log("Scenario-3 after conversion want to check undefined data type: ", typeof(numerology2)) //number



