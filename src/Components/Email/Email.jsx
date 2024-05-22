import { useState } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";

const Email = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const handelSubmit = (e) => {
    e.preventDefault();
    // service id , template id , public key
    const serverid = "service_3nimmht";
    const templetid = "template_4mc5gq7";
    const publickey = "4-YY9w35SrWqDAaoC";
    // object that contain dynamic templet params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "maya ghandor",
      message: message,
    };
    // send email useing email.js
    emailjs
      .send(serverid, templetid, templateParams, publickey)
      .then((response) => {
        console.log("email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <form onSubmit={handelSubmit} className="emailform">
      <input
        type="text"
        placeholder="your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="your name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">send email</button>
    </form>
  );
};

export default Email;
