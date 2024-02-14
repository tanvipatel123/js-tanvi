//dates
 let myDate = new Date()
 console.log(myDate);
//date mrthods
 console.log(myDate.toDateString());
 console.log(myDate.toISOString());
 console.log(myDate.toLocaleDateString());

 //type dekhne ke liye
 console.log(typeof myDate);

 let myCreateDate = new Date(2024,0,23)//javascript me month zero se start hota hai.

 console.log(myCreateDate.toDateString());

 //localstring - date and time both are showing
 //let currDate = new Date(2023,0,23,5,3)
 let currDate = new Date("2023-01-14")//yy-mm-dd
 let db = new Date("01-14-2023")//mm-dd-yy
 console.log(db.toLocaleString());

 //timestamps
 let myTimeStamps = Date.now()
 console.log(myTimeStamps);//miliseconds
 console.log(myCreateDate.getTime());//milisecond value

 console.log(Date.now()/1000);//value decimal me ati hei no need decimal 
 console.log(Math.floor(Date.now()/1000));//value decimal me nahi ayegi

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth());
 //getmonth()
 //getdate()
 //getfullyear()
 //gettime()
 //getsecond() etc..

 //`${newDate.getDate()}` and time

 newDate.toLocaleString('default',
 {weekday: "long",})
