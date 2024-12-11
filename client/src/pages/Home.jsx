 export const Home=()=>{
return (

    <>
    <main>
        <section className="section-hero">

            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>We are the world's best IT Company </p>
                    <h1>Welcome to Effective ITech </h1>
                    <p>Are you ready to take your buisness to the next level with cutting-edge IT solutions? Look no further! At Effective ITech , we specialize in providing innovative IT services and solutions tailored to meet your unique needs. </p>
                    <div className="btn btn-group">
                        <a href="/contact">
                        <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                        <button className="btn secondary-btn">learn more</button>
                        </a>

                    </div>
                </div>
                {/* hero images  */}
                <div className="hero-image">
                    <img src="/Images/register.png" alt="codding together " width="200" height="200"/>
                </div>
            </div>
        </section>
    </main>
     {/* 2nd section  */}
     <section className="section-analytics">
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>50+</h2>
                <p>registered companies</p>
            </div>
           <div className="div1">
            <h2>10000+</h2>
            <p>Happy clients</p>
            </div>
            <div className="div1">
            <h2>500+</h2>
            <p>well known developers</p>
            </div>
            <div className="div1">
            <h2>25*7</h2>
            <p>Service</p>
            </div>
        </div>
     </section>


     <section className="section-hero">

<div className="container grid grid-two-cols">
<div className="hero-image">
        <img src="/Images/register.png" alt="codding together " width="200" height="200"/>
    </div>
    <div className="hero-content">
        <p>We are the world's best IT Company </p>
        <h1>Get Started Today </h1>
        <p>Are you ready to take your buisness to the next level with cutting-edge IT solutions? Look no further! At Effective ITech , we specialize in providing innovative IT services and solutions tailored to meet your unique needs. </p>
        <div className="btn btn-group">
            <a href="/contact">
            <button className="btn">connect now</button>
            </a>
            <a href="/services">
            <button className="btn secondary-btn">learn more</button>
            </a>

        </div>
    </div>
    {/* hero images  */}
    
</div>
</section>

    </>
)

}
