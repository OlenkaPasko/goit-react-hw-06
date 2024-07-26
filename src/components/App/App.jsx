import ContactForm from "../ContactForm/ContactForm";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts,deleteContact } from "../../redux/contactsSlice";
import SearchBox from "../SearchBox/SearchBox"
//import ContactList from "./components/ContactList/ContactList"
import css from "./App.module.css"

export default function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
   const handleDelete = (id) => {
     dispatch(deleteContact(id));
   };
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      
    </div>
  );
}




