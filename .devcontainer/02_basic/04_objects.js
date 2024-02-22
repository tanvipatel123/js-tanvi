const course = {
    coursename : "javascript",
    price : 999,
    courseinstructor : "tanvi"
}
//course.courseinstructor

const {courseinstructor : instructor} = course//object de structure
console.log(instructor);

const navbar = ({company}) => {
//destructure object {company}
}
navbar(company = "softtechnohub")

//object format  api..
/*{
    //jason  keys or value dono string me hota hai 
    "name" : "tanu"
    "price" :"free"
}*/
//array format api..
