import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import css from "./ContactForm.module.css"

const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const ContactValidationSchema = Yup.object().shape({
   nameContact: Yup.string().required("Ім'я має бути обов'язково").min(2, "Ім'я профілю має бути мінімум в 2 символи")
   .max(50, "Ім'я профілю має бути меншим за 50 символів"),
   numberContact: Yup.string().matches(
      phoneRegExp,
      "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'"
    )
    .required("Номер телефону є обов'язковий"),
});




const initialValues = {
   nameContact:"",
   numberContact:"",
}
const ContactForm = ({addContact}) => {

   const handleSubmit = (values, actions) => {
const contactObject = {
name:values.nameContact,
number:values.numberContact
}

addContact(contactObject)
actions.resetForm();
   };

  return (
   <Formik initialValues={initialValues} onSubmit={handleSubmit}  validationSchema={ContactValidationSchema}>
  
      <Form className={css.form}>
     <label className={css.label}>
       <span className={css.text}>Name</span>
       <Field 
       type="text"
       name="nameContact"
       />
     </label>

     <ErrorMessage name="nameContact" component="span" className={css.error}/>

<label className={css.label}>
   <span className={css.text}>Number</span>
      <Field 
      type="tel"
      name="numberContact"
      />
</label>

<ErrorMessage
      className={css.error}
     name="numberContact"
     component="span"
/>
   
      <button type="submit" className={css.formBtn}>Add Contact</button>
   </Form>
   
</Formik>
  )
}

export default ContactForm