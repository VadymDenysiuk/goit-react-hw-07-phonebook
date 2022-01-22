import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List } from './ContactList.styled';
import Spinner from '../Spinner/Spinner';

function ContactList({ contacts, isFetching }) {
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <List>
          {contacts && contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
        </List>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  isFetching: PropTypes.bool,
};

export default ContactList;
