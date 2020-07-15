import React, { Component } from 'react';
import shortid from 'shortid';
import InputForm from './components/InputForm/InputForm';
import Filter from "./components/Filter/Filter";
import Phonebook from './components/Phonebook/Phonebook';
import Container from './components/Container/Container';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    };
    this.setState(({ contacts }) => {
      const sameContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

      if (sameContact) {
        alert(`${name} is already exists!`);
        return;
      }
      return (
        {
          contacts: [contact, ...contacts]
        }
      )
    })

  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter),
    );
  };

  submitHandler = (event) => {
    event.preventDefault();
  }

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <Container title='Phonebook'>
          <InputForm onSubmit={this.addContact} />
        </Container>
        <Container title='Contacts'>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <Phonebook contacts={filteredContacts} onDelete={this.deleteContact} />
        </Container>
      </>
    )
  }
}

export default App;
