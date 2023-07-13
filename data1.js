 
 //1- create object//
 const  Person={
    fname:"Ahmad",
    lname:"Hossam",
    age:"20",
    city:"alex"
 }
console.log(Person)

 // change obj to json //
 const PersonJson= JSON.stringify(Person)


 //  stor in new file//
 const fs=require("fs")
 fs.writeFileSync("data2.txt", PersonJson)

 // read file in json//
 const fs=require("fs")
 fs.writeFileSync("data2.txt", PersonJson)

// convert from json  to object //
const PersonObj=JSON.parse(PersonJson)


// update object//


console.log(Person.fname="adel",Person.lname="ahmad",Person.age="40",Person.city="cairo")
const PersonJson2= JSON.stringify(Person)


// store in file //
fs.writeFileSync("data2.txt", PersonJson2)

 module.exports={
    PersonJson1:PersonJson,
    PersonObj1:PersonObj,
    PersonJson2:PersonJson2
 }
