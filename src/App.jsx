import './App.css';
import initialContscts from './users.json';
import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contact, setContact] = useState(initialContscts);
  const [filter, setFilter] = useState('');
  const filterTasck = contact.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterTasck} />
    </div>
  );
}

export default App;
