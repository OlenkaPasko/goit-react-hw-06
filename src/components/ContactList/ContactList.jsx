import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";

import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
 
  const handleDelete = (id) => {
   dispatch(deleteContact(id));
 };

 const filteredContacts = contacts.filter((contact) =>
   contact.name.toLowerCase().includes(filter.toLowerCase())
 );

  return (
    <ul>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <button type="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;