import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [desc, setDesc] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting us")
        setName('')
        setPhone('')
        setEmail('')
        setDesc('')

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.mb3}>
          <label className={styles.label} for="name">
            Enter name
          </label>
          <input
            type="name"
            value={name}
            onChange={handleChange}
            className={styles.field}
            id="name"
            aria-describedby="emailHelp"
            name="name"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.label} for="email">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className={styles.field}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.label} for="Phone">
            Phone*
          </label>
          <input
            type="phone"
            value={phone}
            onChange={handleChange}
            className={styles.field}
            id="phone"
            name="phone"
            aria-describedby="emailHelp"
          />
        </div>

        <div className={styles.mb3}>
          <label className={styles.label} for="desc">
            Description
          </label>
          <textarea
            className={styles.field}
            value={desc}
            onChange={handleChange}
            id="desc"
            placeholder="Write your concern here"
            rows="3"
            required  ></textarea>
        </div>

        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
