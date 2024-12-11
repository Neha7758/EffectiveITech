// to validate zod we have parseAsync method 
const validate = (schema)=> async(req, res, next)=> {
    try
    {
        const parseBody= await schema.parseAsync( req.body );
        req.body= parseBody;
        next();
    }
    catch(err)
    {
        const status= 422;
        const message="fill in the input";
        const extraDetails  = err.errors[0].message;
       
                res.status(400).json({msg:message});
        const error1 ={
    status, 
    message,
    extraDetails
        };
console.log(error1);
next(error1);
    }
}
module.exports=validate;