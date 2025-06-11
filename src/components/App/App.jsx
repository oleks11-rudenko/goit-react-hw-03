import { useState, useEffect } from 'react';
import 'modern-normalize';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    console.log(savedContacts);

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });
  const [search, setSearch] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const delContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={searchedContacts} onDel={delContact} />
    </div>
  );
}
