import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: [],
  reducers: {
    addContact(state, action) {},
      deleteContact(state, action) { },
     filterContact(state, action) {}
  },
});
// Генератори екшенів
export const { addContact, deleteContact, filterContact } = contactsSlice.actions;

// Редюсер слайсу
export default contactsSlice.reducer;