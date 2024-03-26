/*

As we already know Javascript is mainly :- 
1. Synchronous  (each operation wait for last one to complete before execution)
2. Single Threaded Language
 


Q. Difference between synchronous and asynchronous 

Synchronous: Sequentially done, if reading a file..till it completes...can't do anything else
Asynchronous: Not done sequentially, if reading a file...tile it completes..we can do other tasks..



Blocking code vs Non Blocking code

Blocking code: 
      - block the flow of the program
      - read file synchronously

Non Blocking code:
      - don't block the flow of the program
      - read file asynchronously



---> yhaan pe hum soch sakte hai ki non blocking code achaa hota hai use karne ke liye

but jaise ek user ka data aaya aur humein us data ko database mein store karna hai and uske baad user ko notification dena hai ki "Registration Successful" 

and we know that database is also a file (where we read and write data) so according to the non blocking code  user ko pehle hi message chala jayega ki "Registration Successful" jab tak file read ho rahi hogi.
but ho skta hai ki jab file read ho rhi ho to usmein koi error aa gyi ho... but user ko message chala jayega ki "Registration Successful" and user ko pta bhi nahi chalega ki uska data store hua bhi ya nahi.
so hum keh skte hai ki koi bhi (sync or async) acha yaa bura nahi hai... it depends on the situation use case  ki humein kya karna hai 

So, no individual (async or sync) is better, it all depends on the situation..

*/