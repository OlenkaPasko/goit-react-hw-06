import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import ContactList from "../ContactList/ContactList";

export default function ContactsContainer() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
  );
}
