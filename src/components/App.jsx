import { useState } from 'react';
import ContactForm from 'components/Form';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import SaveIntoLocalStorage from 'components/Hooks';
import shortid from 'shortid';

const App = () => {
  const [contacts, setContacts] = SaveIntoLocalStorage();
  const [filter, setFilter] = useState('');

  const handleSubmitForm = ({ contact }) => {
    const { name, number } = contact;
    setContacts([...contacts, { id: shortid.generate(), name, number }]);
  };

  const filterContactsByName = () =>
    contacts.filter(elem => elem.name.toLowerCase().includes(filter));

  const handleFilterChange = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const deleteContactById = contactId => {
    setContacts(contacts.filter(elem => elem.id !== contactId));
  };

  const contactNameList = contacts.map(contact => contact.name);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={handleSubmitForm}
        contactNameList={contactNameList}
      />
      <h2>Contacts</h2>
      <FilterContacts onChange={handleFilterChange} />
      <ContactList
        contacts={filterContactsByName()}
        onDeleteId={deleteContactById}
      />
    </div>
  );
};

export default App;
