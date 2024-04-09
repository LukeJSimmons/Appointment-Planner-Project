import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input type="text" value={name} onChange={event => {setName(event.target.value)}}></input>
        <p>Phone:</p>
        <input type="tel" pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$" value={phone} onChange={event => setPhone(event.target.value)}></input>
        <p>Email:</p>
        <input type="email" value={email} onChange={event => setEmail(event.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

