import React, {useState } from "react";
import Nav from "./Nav";
import './contact.css'
function Contact(){
    const[datastatus,setDatastatus]=useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
          e.preventDefault();
          console.log(name,email,message);
          fetch("http://localhost:5000/feedback", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              name,
              email,
              message,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setDatastatus(data.error);
              console.log(data, "feedback");
              if (data.status === "ok") {
                alert("feedback sent successfully");
                window.location.href = "/";
              }
            });
        };
    return(
        <div>
            <Nav/>
            <div className="feed">
            <div className="say-hello">
               <p className="ge">SAY HELLO TO </p> 
               <p1>WHO I AM</p1>
            </div>
            <div className="main">
                <input type="text" className="User_name"  placeholder="User Name" required onChange={(e) => setName(e.target.value)}/>
                <input type="text" className="Email" placeholder="E-mail id" required onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" className="Notes" placeholder="Write Your Message Here.......!" required onChange={(e)=>setMessage(e.target.value)}/>
                <button className="button" type="submit" onClick={handleSubmit}>SUBMIT</button>
                
            </div>
            </div>
        </div>
    );
}
export default Contact;