const  { z }  = require ("zod");
// install zod npm i zod

// creating object schema 
const signupSchema= z.object({
    username:z
    .string({required_error: "Name is required"})
    .trim()
    .min(6, { message:"Name must be at least of 6 charts."})
    .max(255, {message:"Name must not be more than 255 characters"}),


  email:z
    .string({required_error: "email is required"})
    .trim()
    .min(7, { message:"Name must be at least of 3 charts."})
    .max(255, {message:"Name must not be more than 255 characters"}),


 phone:z
    .string({required_error: "Phone no  is required"})
    .trim()
    .min(10, { message:" phone must be at least of 10 charts."})
    .max(255, {message:"phone must not be more than 255 characters"}),


    password:z
    .string({required_error: "password is required"})
   
    .min(7, { message:"password must be  at least of 6 charts."})
    .max(255, {message:"password must not be more than 255 characters"}),
});



    
module.exports= signupSchema;