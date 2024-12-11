// controllers
// use to process the incomming request will come from routers.
// create home page logic as below
 const User= require("../models/user-model");
 const  bcrypt = require("bcryptjs")

const home = async(req, res )=> {
     try{
        res
        .status(200)
        .send(`Welcome to world's best website using CONTROLLER`);

     }
     catch(error)
     {
        console.log(error)
     }
};


const register = async (req, res )=>{
    try
    {
// console.log(req.body);
    const {username, 
    email, 
    phone , 
    password}=req.body;
    const userExists = await User.findOne({email});


    if (userExists)
    {
    return res.status(400).json({msg:"email already exists"});
    }
//hash the password if email doesn not matche.
// const saltRound=10;
// const hash_password= await bcrypt.hash(password, saltRound)
// const hash_password= await bcrypt.hash(password, 10)
// or you can also pass the salt round value 10;
// change into below code 
// const userCreated =await User.create({username, email, phone, password:haah_password});

//  using pre method of userSchema
       
        const userCreated =await User.create({username, email, phone, password});
        // res.status(200).json({msg: userCreated , 
        res.status(200).json({msg: "registration successfull" , 
            token: await userCreated.generateToken(),
           userId: userCreated._id.toString(), });


    }   
    catch(error)

    {
    // res.status(500).json({msg:"Page not found"});
    // next(error)
    res.status(500).json({msg:"Internal server errror"});
    console.log(error)
    }

    };

    const service = async (req, res )=>{
    try{
        res
        .status(200)
        .send(`service result`);
    }
catch(error)
{
    console.log(error)
}
};
// user login Form
const login =async(req, res)=> {
    try {

    const {email, password }= req.body;
    const userExist= await User.findOne({email});
    console.log(userExist);


            if(!userExist)
    {
    return res.status(400).json({message:"Invalid Credential"});
    } 
        const user= await bcrypt.compare(password,userExist.password);
        // const user= await userExist.comparePassword(password);
if(user)
{
    // const userCreated =await User.create({username, email, phone, password});
        // res.status(200).json({msg: userCreated , 
        res.status(200).json({
            msg: "Login successful" , 
            token: await userExist.generateToken(),
           userId: userExist._id.toString(), 
        });

} else {
    console.log(error);
    res.status(401).json({message:"invalid email or password"})
}

    }
    catch(error){
        res.status(500).json({msg:"Internal server errror"});


    }
}

// user logic
const user = async(req,res)=>{
    try{
        // const userData= req.user;
        // console.log(userData);
        res.status(200).json({msg:"hi user"})

    }
    catch(error)
    {
        console.log('error from the user route ${error}');
    }

};

module.exports = {home, register,login ,service,user};
