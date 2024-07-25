import { createSlice } from "@reduxjs/toolkit";

const initialState = { contacts: [], filter: "" };

const contactsSlice = createSlice({
  name: "contacts",
  
  // Початковий стан редюсера слайсу
  initialState,

  reducers: {
    addContact(state, action) {
      console.log(action);
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    searchContact(state, action) {
      state.filter = action.payload;
    },
  },
});
// Генератори екшенів для використання в dispatch
export const { addContact, deleteContact, searchContact } =
  contactsSlice.actions;

// Функція-селектор для використання в useSelector
export const selectContacts = (state) => state.contacts;

// Редюсер слайсу
export default contactsSlice.reducer;
