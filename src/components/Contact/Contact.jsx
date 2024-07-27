import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css"
export default function Contact({ name, number, onDeleteContact }) {
  //const dispatch = useDispatch();
  //const contacts = useSelector((state) => state.contacts.items);
  //const filter = useSelector((state) => state.filters.name);

  //const handleDeleteContact = (id) => {
   // dispatch(deleteContact(id));
  //};
  //const filteredContacts = contacts.filter((contact) =>
   // contact.name.toLowerCase().includes(filter.toLowerCase())
  //);
  return (
    <div>
      <div >
        <p>
          {name}: {number}
        </p>
      </div>
      <div>
        <button type="button" onClick={onDeleteContact} className={css.button}>
          Delete
        </button>
      </div>
    </div>
  );
}
