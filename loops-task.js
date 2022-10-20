let person =[{
    Name: "ibrahim",
    Age: 24,
    Sex: "male",
    Hobbies:"story writing",
    Ambition: " Full Stack Developer"
}]

// For loop
for (i=0; i<person.length; i++){
    console.log(person [i])
}
// For in 
for(let key in person){
    console.log( person[key])
}

// For of 
for(let details of person){
    console.log(details)
}
// For Each
person.forEach(data=>console.log(data))