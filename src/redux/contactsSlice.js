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
          
      },
      searchContact(state, action)
      { state.filter = action.payload; }
  },
});
// Генератори екшенів
export const { addContact, deleteContact, searchContact } = contactsSlice.actions;

// Редюсер слайсу
export default contactsSlice.reducer;