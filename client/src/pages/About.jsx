import { Analytics } from "../components/Analytics";

export const About=()=>{

    return(
    <>
    <main>
    <section className="section-hero">
    <div className= "container grid grid-two-cols">
    <div className="hero-content">
      <p>Welcome to effective ITech</p>
      <h2>Why choose us?</h2>
      <p>Expertise:Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends</p>
  
      <p>Customization: We understand that every buisness is unique. That's why we create solutions that are tailored to your specific needs and goalsl</p>
      <p>Customer-Centric approach: We prioritize your satisfaction and provide top-notch suppport to address your IT concerns.</p>
      <p>Affordability: We offer competitive pricing without compromising on the quality of our services.</p>
      <p>Realiability:count on us  to be there when you need us . We're committed to ensuring your IT  environment is reliable and available 24/7. </p>
   
    
</div>
      <div className="hero-image">
         <img src="Images/register.png" alt="It about us"  height="300" width="250"/>
      </div>
      <div className="btn btn-group">
            <a href="/contact">
            <button className="btn">connect now</button>
            </a>
            <a href="/services">
            <button className="btn secondary-btn">learn more</button>
            </a>

        </div>
      </div>
      <Analytics/>
    </section>
    </main>
    
    </> 
    )  ;  

    

}
