
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
export const Login=()=> {
    const [user,setUser]=useState({
        username:"",
        email:"",
        message:"",
       
                    
            });
            const navigate=useNavigate();
            const { storeTokenInLS } =useAuth();
            const handleInput= (e) =>{
                console.log(e);
        let name= e.target.name;
        let value= e.target.value;
        
        
            
            setUser({
                ...prev,
                [name]:value,
               
            });
           
            };
            // handling form submit 
            const handleSubmit= async(e)=>{
                e.preventDefault();
                // alert(user);
                console.log(user);
try{
    const response= await fetch('https://effectiveitech-backend.onrender.com',
        { method:"post",
            headers:{
                "Content-Type": "application/json",
            },
body:JSON.stringify(user),
        }
    );
    if(response.ok)
    {
      
        alert("login successful");
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token", res_data.token);
        setUser({email:"", password:""});
    navigate("/");
    }
       else{
        alert("try again");
       } 

console.log(response);

}
catch(error)
{
    console.log('login', error)
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
                            <h1 className="main-heading-mb3">Login</h1><br/>
                        
                            <form onSubmit={handleSubmit}>


                            <div>
                                    <label htmlFor="email">email</label> 
                                    <input type="email" 
                                    name="email" 
                                placeholder="email" 
                                id= "email" required
                                 autoComplete="off" value={user.email} onChange={handleInput}
                                 

                                 
                                
                                    /> </div>
                            <div>
                            <label htmlFor="password"> Password</label>
                            <input type="password" 
                            name="password" 
                        placeholder=" enter your password" 
                        id= "password" required
                         autoComplete="off" value={user.password} onChange={handleInput}
                         /> </div>
                                 

                                  <br/>
                                     <button type="submit" className="btn-btn-submit">Login</button>


       
                                 
                                    </form>
                                    </div>
                                    </div>
                                    </div>
                                    </main>
                                    </section> 
                                    </>
           
);
};
