import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacts/contact-slice';

import { Text, Button } from './ContactItem.styled';

function ContactItem({ contact }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li>
      <Text>{contact.name}</Text>
      <Text>{contact.phone}</Text>
      <Button onClick={() => deleteContact(contact.id)}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactItem;
