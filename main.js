

/*Calculate the tax that people need to pay for their salary. Until they reach 1000 eur, 
they pay 11% tax, but when they go above 1000 eur, they pay 18% for the sum above the threshold. (Example: 1300 eur salary, 
    1000 eur get taxed 11%, 
    300 eur get taxed 18%, get the total tax). Modify the function to check if the worker is a craftsman, 
    if he is, drop the taxes to 5% and 10% respectively*/

function calculateTax(salary,jobDescription){
       var tax;
       if(salary<=1000 && jobDescription == "CEO"){

           tax = 11 * salary/100;
       } else if(salary>1000 && jobDescription == "CEO"){

           tax = 18 * salary/100;
       } else if(salary<=1000 && jobDescription == "craftsman"){

           tax = 5 * salary/100;

       } else if(salary>1000 && jobDescription == "craftsman"){

           tax = 10 * salary/100;
       } else {

           document.write("error");

       }

   console.log(tax);

}

calculateTax(2200,"craftsman");
