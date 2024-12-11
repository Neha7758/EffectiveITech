
import { BrowserRouter, Route, Routes} from "react-router-dom";


import{ Home} from "./pages/Home";
import{ About} from "./pages/About";
import{ Contact} from "./pages/Contact";
import{ Service} from "./pages/Service";
import{ Register} from "./pages/Register";
import{ Login} from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar";
const App = ()=>{

  // return <h1> our main root page  , hello mern series by thappa</h1>;
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     
      <Route path="/" element={ <Home/>}></Route>
      <Route path="/about" element={ <About/>}></Route>
      <Route path="/contact" element={ <Contact/>}></Route>
      <Route path="/service" element={ <Service/>}></Route>
      <Route path="/register" element={ <Register/>}></Route>
      <Route path="/login" element={ <Login/>}></Route>
      <Route path="/logout" element={ <Logout/>}></Route>
     
      <Route path="*" element={<Error/>}> </Route>
    </Routes>
   <Footer/>

    </BrowserRouter>
  </>
  )
  
};
export default App;