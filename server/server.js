
require ("dotenv").config();
const cors= require("cors");
const express= require("express");



const app= express();

const router= require("./router/auth-router");
const contactRoute= require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const serviceRoute=require("./router/service-router");
const corsOptions = {
    origin: "https://effectiveitech-frontend.onrender.com",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());







// const contactForm = require("./controllers/contact-controller");
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

app.get("/", (req, res )=>{
    res.status(200).send(`Welcome to world's best website`);

});

app.get("/register", (req, res )=>{
    res.status(200).send(`Welcome to Registration page`);

});

app.get("/service", (req, res )=>{
    res.status(200).send(`Welcome to our services`);

});

app.get("/contactus", (req, res )=>{
    res.status(200).send(`please enter your contact info`);

});


const PORT= 5000;

connectDb().then(()=>{
app.listen( PORT, ()=>{
    console.group(`server is running at port: ${PORT}`);
});
});
