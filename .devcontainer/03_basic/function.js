function myname(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("U");
}
myname();


/*function addnum(num1,num2){//num1 or num2 parameters    
   console.log(num1+num2);
}
const result =addnum(3, 4);// 3 or 4 argument passing in function
console.log("Result :", result);*/


function addnum(num1,num2){
    /*let result = num1 + num2 -> 2nd type
    //return result*/
    //console.log("Tanvi");//tanvi execute nahi hoga bcause function ak bar return ho jayega bad me vo work nahi karega
    return num1+num2 // 2nd type
}
const result =addnum(3, 4);// 3 or 4 argument passing in function
console.log("Result :", result);

function loginusermessage(username){//(!username) or default ke liye = (username = "tanvi").
    if(username === undefined){
        console.log("please enter valid username..")
}
    else{
        return `${username} just logged in`
    }
}
console.log(loginusermessage("tanu"))//tanvi-value pass nahi karte to ans undefines ayega




