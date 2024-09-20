import React from "react"
import css from "../ContactList/ContactList.module.css"
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({name, number,onDeleteContact,id}) => {
  return (
   <>
<div className={css.contactItem}>

<div>
   <div className={css.contactInfo}>
      <IoPerson className={css.icon} />
      <p className={css.contactText}>{name}</p>
   </div>
   
    <div className={css.contactInfo}>
      <FaPhoneAlt className={css.icon} />
      <p className={css.contactText}>{number}</p>
   </div>
</div>

<button onClick={() => onDeleteContact(id)} className={css.deleteBtn}>Delete</button>
</div>

   </>
    
  )
}

export default Contact