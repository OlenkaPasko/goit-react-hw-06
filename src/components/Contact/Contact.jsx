import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import  ContactList   from "../ContactList/ContactList";

export default function ContactsContainer() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return <ContactList contacts={contacts} onDelete={handleDeleteContact} />;
}
