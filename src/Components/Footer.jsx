import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  const year = new Date();

  return (
    <footer>
       <h4>Copyright &copy; {year.getFullYear()}</h4>
    </footer>
  )
}

export default Footer