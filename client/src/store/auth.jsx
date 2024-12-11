import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const[services, setServices]=useState([])
    //function to stored the token in local storage
    const storeTokenInLS = (serverToken) => {

        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    console.log("token", token);
    console.log("isLoggedin ", isLoggedIn);

    // //   to check whether is loggedIn or not
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };
    // to fetch the services data from the database
    const getServices=async()=>{
        try{
            const response=await fetch("https://effectiveitech-backend.onrender.com",
{
    method:"GET",
});

 if(response.ok){
    const data= await response.json();
    // console.log(data.msg);
    setServices(data.msg);
 }
        }
        
        catch(error)

        {
 console.log(error)
        }
    }


useEffect(()=>{
    getServices();
},[]

)
    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser ,services}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
