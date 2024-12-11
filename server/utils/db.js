const mongoose= require("mongoose");
// const URI="mongodb://127.0.0.1:27017/e-comm";
// mongoose.connect(URI);
const URI="mongodb+srv://vsavita25:uSzYJGainW8CydE2@test-prodb.jptd0.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=test-prodb"
// const URI= process.env.MONGODB_URI;
const connectDb = async ()=> {
    try{

        await mongoose.connect(URI);
        console.log("database connected succesfully");
    }
    catch(error)
    
    {
        console.error("database connection failed");
        process.exit(0);
    }
};


module.exports= connectDb;