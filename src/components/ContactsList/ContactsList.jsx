

const ContactsList = ({ contacts, onDeleteContact }) => {
  const allContacts = contacts.map(contact => {
    const { name, number, id } = contact;
    return (
      <>
        <li key={contact.id}>
          Name: {name} Number: {number}
        </li>
        <button onClick={() => onDeleteContact(id)}>delete contact</button>
      </>
    );
  });
  return <ul>{allContacts}</ul>;
};

export default ContactsList