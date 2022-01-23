import { useState } from 'react';
import { useFetchContactQuery } from './redux/contacts/contact-slice';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { Toaster } from 'react-hot-toast';
import { Container, Text } from './App.styled';

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
      <Text>Number of contacts: {data && data.length}</Text>
      {data && data.length ? (
        <ContactList contacts={visibleContacts} isFetching={isFetching} />
      ) : (
        <Text>Phonebook is empty. You can add contacts.</Text>
      )}
    </Container>
  );
}

export default App;
