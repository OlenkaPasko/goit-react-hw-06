import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: "contacts",
  
  // Початковий стан редюсера слайсу
  initialState,

  reducers: {
    addContact(state, action) {
      console.log(action);
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  
  },
});
// Генератори екшенів для використання в dispatch
export const { addContact, deleteContact} =
  contactsSlice.actions;

// Функція-селектор для використання в useSelector
export const selectContacts = (state) => state.contacts.items;

// Редюсер слайсу
export default contactsSlice.reducer;
