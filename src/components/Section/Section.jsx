import React from 'react'
import css from "./Section.module.css"

const Section = ({children}) => {
  return (
    <section className={css.container}>
      {children}
    </section>
  )
}

export default Section