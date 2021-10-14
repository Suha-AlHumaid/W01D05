var num1 = 1
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
   else if (y>x && y >z)
   {
           if (x>z)
           {
            console.log(`(${num2} , ${num3} , ${num1})`);
           }
           else
           {
            console.log(`(${num2} , ${num3} , ${num1})`);
           }
   }
   else if (z>x && z>y)
   {
           if (x>y)
           {
            console.log(`(${num3} , ${num2} , ${num2})`);
           }
           else
           {
               console.log(`(${num3} , ${num2} , ${num2})`);
           }
   }  


   for (i=0; i<=20;i++) {
       console.log(i + ",");
   }

   for (i=0; i<5 ; i++ ){
    for (i=5; i<0 ; i--){
       console.log("*");
   }
}