//import { useSelector, useDispatch } from "react-redux";
//import { selectContacts, deleteContact } from "../../redux/contactsSlice";

import ContactForm  from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox"
import Contact from "../Contact/Contact"

import css from "./App.module.css"

export default function App() {

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      <Contact />
    </div>
  );
}




