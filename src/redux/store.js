import { configureStore } from "@reduxjs/toolkit";
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' 
import contactsReducer from "./contactsSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;