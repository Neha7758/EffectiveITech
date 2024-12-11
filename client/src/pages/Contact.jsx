import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const handleInput= (e) =>{
  console.log(e);
let name= e.target.name;
let value= e.target.value;



setUser({
  ...user,
  [name]:value,
 
});

};

// type UserAuth = boolean;
export const Contact = () => {
  const [data, setData] = useState(defaultContactFormData);

  // const { user } = useAuth();

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("response: ", response);
      // alert(response);

      if (response.ok) {
        setData(defaultContactFormData);
        const responseData = await response.json();
        alert(responseData);
        console.log(responseData);
      } else {
        // Handle API error here
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

// Subscribe to Thapa Technical Youtube to Support 
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* <h1>Contact Page</h1> */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/Images/register.png" alt="always ready to help you" />
          </div>

          <section className="section-form">
            <form onSubmit={handleContactForm}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  // {
                  //   user?? <> value = {} </>
                  // }
                  value={data.username}
                  onChange={handleInput}
                  autoCapitalize="off"
                  required
                />
              </div>
             

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  // {
                  //   user?? <> value = {} </>
                  // }
                  value={data.email}
                  onChange={handleInput}
                  autoCapitalize="off"
                  required
                />
              </div>
             




              <div>
                <label htmlFor="message">Message</label>
                <textarea rows="5" cols="8"
                  type="text"
                  name="message"
                  id="username"
                  // {
                  //   user?? <> value = {} </>
                  // }
                  value={data.message}
                  onChange={handleInput}
                  autoCapitalize="off"
                  required
                />
              </div>
            <button type="submit" className="btn-btn-submit">Contact Us</button>
             
            </form>
          </section>
        </div>
      
      </section>
    </>
  );
};
