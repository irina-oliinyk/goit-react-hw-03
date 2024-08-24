import './App.css';
import initialContacts from './users.json';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contact, setContact] = useState(() => {
    const saveContact = window.localStorage.getItem('initialContacts');
    if (saveContact) {
      return JSON.parse(saveContact);
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState('');
  const filterTasck = contact.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  const addContact = newContact => {
    setContact(prevContact => {
      return [...prevContact, newContact];
    });
  };
  const deleteContact = contactId => {
    setContact(prevContact => {
      return prevContact.filter(contact => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('initialContacts', JSON.stringify(contact));
  }, [contact]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterTasck} onDelete={deleteContact} />
    </div>
  );
}

export default App;
