/*An old woman has 3 cats. She has to feed them every day for one week. The cats’ names are Tabby, Lizzie and Mary. 
Tabby likes fish and Lizzy likes chicken.
 Mary eats anything you give her. Help the woman feed her cats by writing a script that will feed them for a week. 
 The actual feeding procedure is: console.log(nameofcat + “ started eating fish/chicken/whatever”)*/

 function feedCats(){
    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var cats = ["Tabby", "Lizzie", "Mary"];

    for(var i = 0; i<days.length; i++){
    var currentDay = days[i];

    for(var index = 0; index<cats.length; index++){
    var cat = cats[index];

    if(cat === "Tabby"){

        console.log(cat + " ate chicken on " + currentDay);
    } else if(cat === "Lizzie"){

        console.log(cat + " ate fish on " + currentDay);

    } else if(cat === "Mary"){

        console.log(cat + " ate whatever on " + currentDay);
    }
    }
feedCats();

/*Help a paramedic save a life! A person is unconscious and the medic needs to perform CPR. 
The whole process lasts one minute. Every second he has to massage the patient's heart (console.log(“performing insertAction”);). 
Every 15-th second he has to check his pulse and at the end of the process, he needs to declare the patient dead or alive. */
function performCPR() {
    var time = 60;
 
    for (var i = 1; i < time; i++) {
 
        if (i % 15 === 0) {
            console.log("checking pulse");
 
        } else {
            console.log("performing insert Action");
 
        }
    }
 
    if (i = time - 1) {
        var outcome = ['The patient is alive :-)', 'The patient is dead :-('];
        var rand = Math.floor(Math.random() * outcome.length);
 
    }
    console.log(outcome[rand]);
 
 }
 
 
 performCPR();




/*Write a script to check whether a number is a palindrome or not. Input the number as a parameter*/
150 do 200 (151,161,171,181)
151=pom
m=151
var poc=150;
var kraj=200;

for(i=poc;i<kraj;i++){
    
var result = ispalindrom(i)

    document.write("brojot e palindrom");
}
function ispalindrom(nummber){
    m=0;
    pom=nummber;
    while(pom>0){
        a=pom%10;
        m=m*10+a
        pom=pom%10
    }
    if(nummber===m) {
        return true;
    } else {
        return false;
    }
}


