import React from "react";
import ContactPicker from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  function onChange(event) {
    setContact(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input type="text" name="name" value={title} onChange={event => {setTitle(event.target.value)}}></input>
        <ContactPicker contacts={contacts} onChange={onChange} value={contact} name={contact.name} />
        <p>Date:</p>
        <input type="date" name="date" min={getTodayString()} value={date} onChange={event => setDate(event.target.value)}></input>
        <p>Time:</p>
        <input type="time" name="time" value={time} onChange={event => setTime(event.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
