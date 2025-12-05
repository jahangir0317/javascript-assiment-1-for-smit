// chapter 3
// Q 1
function showAge() {
    let age = 15;   // Yahan apni age likho
    alert("I am " + age + " years old");
}
// Q 2
var visit = localStorage.getItem("visit");

if (visit === null){
    visit = 0;
}

visit++;

localStorage.setItem("visit", visit);

alert("You have visited this site " + visit + " times");

//Q 3
var birthYear = 1990;

document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear);

// Q 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");


