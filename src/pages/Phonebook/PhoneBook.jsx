import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import s from "./PhoneBook.module.css"


function PhoneBook() {
  return (
      <div>
          <h2 className={s.header}>PhoneBook</h2>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
  )
}

export default PhoneBook