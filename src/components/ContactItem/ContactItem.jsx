import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacts/contact-slice';

import { Text, Button, Item } from './ContactItem.styled';

function ContactItem({ contact }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      <div>
        <Text>{contact.name}</Text>
        <Text>{contact.phone}</Text>
      </div>
      <Button onClick={() => deleteContact(contact.id)}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactItem;
