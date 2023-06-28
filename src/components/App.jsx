import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = () => {
    const { name, contacts, number } = this.state;
    const newContact = {
      name: name,
      id: nanoid(),
      number: number,
    };
    console.log(newContact);
    const updatedContacts = [...contacts, newContact];
    console.log(updatedContacts);
    this.setState({ contacts: updatedContacts });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
    console.log(this.state.filter);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.addContact();
    this.reset();
  };

  onFilter = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  };

  onDeleteContact = id => {
   this.setState(prevState => {
     const updateContacts = prevState.contacts.filter(
       contact => contact.id !== id
     );

     return {
       contacts: updateContacts,
     };
   });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="[a-zA-Zа-яА-Я]+(([ '-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>add contact</button>
        </form>
        {this.state.contacts.length > 0 && (
          <>
            <ContactsList contacts={this.onFilter()} onDeleteContact={this.onDeleteContact} />
            <Filter
              filter={this.state.filter}
              handleChangeFilter={this.handleChangeFilter}
            />
          </>
        )}
      </div>
    );
  }
}
