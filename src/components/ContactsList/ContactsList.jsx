

const ContactsList = ({contacts}) => {
    const allContacts = contacts.map(contact => {
    const { name, number } = contact;
        return (
        <li key={contact.id}>Name: {name} Number: {number}</li>
    );
    })
    return <ul>{allContacts}</ul>
}

export default ContactsList