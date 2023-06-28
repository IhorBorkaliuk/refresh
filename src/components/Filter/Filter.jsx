

const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleChangeFilter}
      pattern="[a-zA-Zа-яА-Я]+(([ '-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
};

export default Filter