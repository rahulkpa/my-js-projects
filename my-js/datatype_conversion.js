let age = 35

let appendValue = 67

console.log("method 1 printing my age data type ", typeof age)

console.log("method 2 printing my age data type ", typeof(age))

console.log("without conversion printing concatenated value ", age+appendValue)

//Now I want to convert this age to a String and want to perform some append operation  expecting value = 3567

let ageInString = String(age)

console.log("method 1 printing concatenated value ", ageInString+appendValue)

