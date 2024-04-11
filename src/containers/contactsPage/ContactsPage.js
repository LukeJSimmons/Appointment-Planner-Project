import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');

 for (let i = 0; i < props.contacts.length; i++) {
  if (name === props.contacts[i].name) {
    console.error('Duplicate name: Try a different name');
  }
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    for (let i = 0; i < props.contacts.length; i++) {
      if (name !== props.contacts[i].name) {
        const form = e.target;
        const formDataObject = {};

        for (let element of form.elements) {
          if (element.tagName === 'INPUT') {
            formDataObject[element.name] = element.value;
          }
        }

        props.addContact(formDataObject);

        setName('');
        setPhone('');
        setEmail('');
        break;
      } else {
        setName('');
        console.error('Duplicate name: Try a different name');
      }
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={props.contacts} />
      </section>
    </div>
  );
};
