import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth}   from "../store/auth";
export const Register=() => {

    const [user,setUser]=useState({
username:"",
email:"",
phone:"",
password:"",
            
    });

    const navigate=useNavigate();
    const { storeTokenInLS }=useAuth();
    const handleInput= (e) =>{
        console.log(e);
let name= e.target.name;
let value= e.target.value;


    
    setUser({
        ...user,
        [name]:value,
       
    });
   
    };
    // handling form submit 
    const handleSubmit= async(e)=>{
        e.preventDefault();
        // alert(user);
        console.log(user);
        try{
        const response= await fetch("https://effectiveitech-backend.onrender.com/api/auth/register",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
        });
        if(response.ok)
            {
                const res_data =await response.json();
                console.log("response from server" , res_data)
                //store the toke in localstorage
                // storeTokenInLS=useAuth();
                storeTokenInLS(res_data.token);
                // (res_data.token);
                // localStorage.setItem("token", res_data.token);
                alert("Registration  successful");
                setUser({username:"", email:"", phone:"",password:""});
            navigate("/login");
            }
               else{
                alert("try again");
               } 
        
        console.log(response);
    }
    catch(error)
    {
        console.log('register',error);
    }
    }
    return (
       

    <>
    

    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="Images/register.png" alt="a girl is trying to do the registration" width="200" height="150" />
                    </div>
                    
                    <div className="registration-form">
                    <h1 className="main-heading-mb3">Registration Form</h1><br/>
                
                    <form onSubmit={handleSubmit}>
                        <div className="inputbox">
                            <label htmlFor="username">username</label>
                            <input type="text" className="inputbox1"
                            name="username" 
                        placeholder="username" 
                        id= "username" required
                         autoComplete="off" value={user.username} onChange={handleInput}
                        
                            /> </div>
                         <div className= "inputbox">
                            <label htmlFor="email">email</label>
                            <input type="email" className="inputbox1"
                            name="email" 
                        placeholder=" enter your email" 
                        id= "email" required
                         autoComplete="off" value={user.email} onChange={handleInput}
                         />
                         
                        </div>

                        
                        
                        <div className="inputbox">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" className="inputbox1"
                            name="phone" 
                        placeholder=" enter your phone" 
                        id= "phone" required
                         autoComplete="off" value={user.phone} onChange={handleInput}
                         />
                         
                        </div>
                        <div className="inputbox">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="inputbox1"
                            name="password" 
                        placeholder=" enter your password" 
                        id= "password" required
                         autoComplete="off" value={user.password} onChange={handleInput}
                         />

                        
                        </div>
                        <br/>
                        <button type="submit" className="btn-btn-submit">Register Now</button>


                    
                    </form>
                    </div>
                </div>
            </div>

        </main>
    </section>
    
    </>
    ) ;

};
