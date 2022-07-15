import { Component } from 'react';
import ContactForm from 'components/Form';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    const parsedStorageContacts = JSON.parse(contactsFromLocalStorage);
    if (parsedStorageContacts) {
      this.setState({ contacts: parsedStorageContacts });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  handleSubmitForm = ({ contact }) => {
    const { name, number } = contact;

    this.setState(state => {
      return {
        contacts: [...state.contacts, { id: shortid.generate(), name, number }],
      };
    });
  };

  filterContactsByName = () =>
    this.state.contacts.filter(elem =>
      elem.name.toLowerCase().includes(this.state.filter)
    );

  handleFilterChange = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  deleteContactById = contactId => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(elem => elem.id !== contactId),
      };
    });
  };
  render() {
    const contactNameList = this.state.contacts.map(contact => contact.name);

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
          onSubmit={this.handleSubmitForm}
          contactNameList={contactNameList}
        />
        <h2>Contacts</h2>
        <FilterContacts onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.filterContactsByName()}
          onDeleteId={this.deleteContactById}
        />
      </div>
    );
  }
}

export default App;
