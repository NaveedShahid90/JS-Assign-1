
// Age

var age= prompt("please mention your age <br>")

if (age >=18) {
    document.write("you are an adult <br>")
    
    
} else if (age >=13 && age <=18){
    document.write("you are a teenager <br>")
} else {
    ("you are a chlid")
}


// Weather
var weather= prompt("please mention weather condition(sunny, rainy, snowy) <br>")

if (weather = "sunny") {
    document.write("Wear sunglasses <br>")
    
    
} else if (weather = "rainy") {
    document.write("Take an umbrella <br>")

} else if (weather = "snowy") {
    document.write("Wear warm clothes <br>")
} else {
    ("Wear warm clothes <br>")
}



// //Grade Determination

var grade=+prompt("Write a obtain marks");
if (grade>= 90 && grade<=100) {
    document.write("Grade:A <br>")
}
 else if(grade>= 80 && grade<=89) {
    document.write("Grade:B <br>")
 }
 else if(grade>= 70 && grade<=79) {
    document.write("Grade:C <br>")
 }
 else if(grade>= 60 && grade<=69) {
    document.write("Grade:D <br>")
 }
else{
    document.write("Grade:F <br>")
}

//login
var user=prompt("Write a User Name (admin)");
var pass=prompt("Enter Your Password (1234)");

if (user== "admin" && pass=="1234") {
    document.write("Login Successful! <br>")
}
else{
    document.write("Login Failed <br>")
}


//Range Checker
var range=+prompt("Write a Number");
if (range>= 1 && range<=10) {
    document.write("This Number is between 1 and 10 <br>")
}
 else if(range>= 11 && range<=20) {
    document.write("This Number is between 10 and 20 <br>")
 }
else{
    document.write("This Number is out of range <br>")
}