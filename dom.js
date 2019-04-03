/*Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz". (Print with console.log)*/


FizzBuzz
var x = 1;
while(x <=100){


if(x % 3 === 0 && x % 5 === 0){

   console.log("FizzBuzz");
} else if(x % 3 === 0){

   console.log("Fizz");
} else if(x % 5 === 0){

   console.log("Buzz");
}  else{

   console.log(x);
}



   x = x+1;
};

function fizbuz(){
    for(i=0;i<=100;i++)

    if(i % 3===0 && i % 5===0){
        console.log("FizzBuzz");
    }
    else if(i % 3===0){
        console.log("Fizz");
    }
    else if(i % 5===0){
        console.log("Buzz");
    }
}
fizbuz();
/*Write a JavaScript program that will iterate from 0 to 15. For each iteration, 
it will check if the current number is odd or even, 
and display a message to the screen (alert or console.log).*/

function numbers(){
 
    for(var x = 0; x <=15; x++){

        if(x % 2 === 0){
        
           console.log("The number is even");
        } else {
        
           console.log("The number is odd");
        }
}

/*Write a JavaScript program to find the armstrong numbers of 3 digits. Note : 
An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. */

function  armstrong(){
    for(var i=100;i<=999;i++){
        var sum = 0;
        var tmpI = i;
        while(tmpI>0){
            var cifra = tmpI%10;
            sum+=Math.pow(cifra,3);
            tmpI = Math.floor(tmpI/10);
        }
        if(sum === i){
            console.log("Brojot ",i," e armstrong");
        }
    }
 }
 armstrong();

 /*Write a JavaScript program to sum the multiples of 3 and 5 under 1000 */
 function sumofSquares(){
 var i = 101;
var suma = 0;
while(i<=150){

   var squared = Math.pow(i,2);
   console.log("the current iteration is ", squared);
   suma = suma + squared;


   i++;
}

console.log("the sum is ", suma);

}
sumofSquares();
