import contacts from "./components/ContactList/userData.json"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import Section from "./components/Section/Section"
import ContactForm from "./components/ContactForm/ContactForm"
import { nanoid } from "nanoid"

import './App.css'
import { useState } from "react"
import {useEffect} from "react"

function App() {

const [filterContact,setFilterContact] = useState("")
// const[users,setUsers] = useState(contacts)

const [users, setUsers] = useState(() => {
   const savedContacts = localStorage.getItem("contacts");
   return savedContacts ? JSON.parse(savedContacts) : contacts;
});
useEffect(() => {
   localStorage.setItem("contacts", JSON.stringify(users));
}, [users]);




const handleFilter = (event) => {
   const value = event.target.value
   setFilterContact(value)
}

const filterUser = users.filter(user => user.name.toLowerCase().includes(filterContact.toLowerCase()))

const addContact=(profile)=>{
   const finalContact ={
      ...profile,
      id: nanoid()
   }
   setUsers([finalContact, ...users]);
}

const onDeleteContact = (contactId) => {
   setUsers(users.filter(item => item.id !== contactId))
}
  return (
    <>
    <div>
    <h1>Phonebook</h1>
    <ContactForm 
      addContact={addContact}
    />
    <Section>
       <SearchBox
         filterContact={filterContact}
         handleFilter={handleFilter}
         
       />
        <ContactList
         filterUser={filterUser}
         onDeleteContact={onDeleteContact}
         id={users.id}
        />
    </Section>
     </div>
    </>
  )
}

export default App
