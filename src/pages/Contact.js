import {React,useState} from "react";
import PizzaLeft from "../assets/cake4.jpg";
import "../styles/Contact.css";
import data from "./data.js";

function Contact() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [mesage,setmessage]=useState('');
  const handleClick=(e)=>{
    let a=name,b=email,c=mesage;
    data.push(a,b,c);
    console.log(data)
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" onChange={(e)=>setname(e.target.value)}/>
          <label htmlFor="email">Phone Number</label>
          <input name="email" placeholder="Enter phone number..." type="phone number" onChange={(e)=>setemail(e.target.value)}/>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            onChange={(e)=>setmessage(e.target.value)}
          ></textarea>
          <button type="submit" onclick={handleClick}> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
