import { React, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([{name: 'Bob Jones', phone: '5018172634', email: 'bobjones@gmail.com'}]);
 const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContact = contact => {
  if (contact.name && contact.phone && contact.email) {
    setContacts(prev => [contact, ...prev]);
  } else {
    console.error('invalid input: Check name, phone, and email');
  }
 }

 const addAppointment = appointment => {
  if (appointment.name && appointment.contact && appointment.phone && appointment.email) {
    setAppointments(prev => [appointment, ...prev]);
  } else {
    console.error('invalid input: Check name, contact, phone, and email');
  }
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} setContacts={setContacts} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} setAppointments={setAppointments} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
