var num1= 1
var num2 =4
var num3=5


   if (num1 > num2)  {
       console.log(` The largest number is ${num1}`);
   }
   else
   {
    console.log(` The largest number is ${num2}`);
   }


   if (num1>num2 && num1>num3)
   {
           if (num2>num3)
           {
            console.log(`(${num1} , ${num2} , ${num3})`);
           }
           else
           {
            console.log(`(${num1} , ${num2} , ${num3})`);
           }
   }
   else if (num2>num1 && num2 >num3)
   {
           if (num1>num3)
           {
            console.log(`(${num2} , ${num3} , ${num1})`);
           }
           else
           {
            console.log(`(${num2} , ${num3} , ${num1})`);
           }
   }
   else if (num3>num1 && num3>num2)
   {
           if (num1>num2)
           {
            console.log(`(${num3} , ${num2} , ${num1})`);
           }
           else
           {
               console.log(`(${num3} , ${num2} , ${num1})`);
           }
   }  


   for (i=0; i<=20;i++) {
       console.log("*");
   }

   for (i=0; i<5 ; i++){
   
    for (i=5; i<0 ; i--){
    console.log("*");
   }
}