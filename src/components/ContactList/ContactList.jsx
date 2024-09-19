import React from "react"
import Contact from "./Contact"
import css from "./ContactList.module.css"
const ContactList = ({filterUser,onDeleteContact, id}) => {
  return (
   <ul className={css.contactList}>
{filterUser.map(contact => (
   <li key={contact.id}>
   <Contact
   name={contact.name}
   number={contact.number}
   id={contact.id}
   onDeleteContact={onDeleteContact}
      />
   </li>
))}
   </ul>
  
    );
};
   
export default ContactList