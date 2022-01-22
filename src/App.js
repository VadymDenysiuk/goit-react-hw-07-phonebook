import { useState } from 'react';
import { useFetchContactQuery } from './redux/contacts/contact-slice';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';

function App() {
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const { data, isFetching } = useFetchContactQuery();

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts =
    data && data.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));

  return (
    <Container>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm contacts={data} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <p>К-во контактов: {data && data.length}</p>
      <ContactList contacts={visibleContacts} isFetching={isFetching} />
    </Container>
  );
}

export default App;
