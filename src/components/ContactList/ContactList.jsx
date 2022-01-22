import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacts/contact-slice';
import Spinner from '../Spinner/Spinner';
import { List, Text, Button } from './ContactList.styled';

function ContactList({ contacts, isFetching }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <Text>К-во контактов: {contacts && contacts.length}</Text>
      <List>
        {isFetching && <Spinner />}
        {contacts &&
          contacts.map(({ id, name, phone }) => {
            return (
              <li key={id}>
                <Text>{name}</Text>
                <Text>{phone}</Text>
                <Button onClick={() => deleteContact(id)}>Delete</Button>
              </li>
            );
          })}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  isFetching: PropTypes.string,
};

export default ContactList;
