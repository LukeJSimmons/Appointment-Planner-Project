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
 const [appointments, setAppointments] = useState([{name: 'Bob Jones', contact: 'contact', date: '1/1/1111', time: '9:00'}]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContact = contact => {
  setContacts(prev => [contact, ...prev]);
 }

 const addAppointment = appointment => {
  setAppointments(prev => [appointment, ...prev]);
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} setContacts={setContacts} addContact={addContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} setAppointments={setAppointments} addAppointment={addAppointment} contacts={contacts} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
