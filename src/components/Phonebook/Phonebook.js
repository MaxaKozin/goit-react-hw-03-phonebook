import React from 'react';
import PropTypes from 'prop-types';

import s from './Phonebook.module.css';
import PhonebookItem from './PhonebookItem';

const Phonebook = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact =>
        <PhonebookItem {...contact} key={contact.id} onDelete={onDelete} />
      )}
    </ul>
  )
}

Phonebook.defaultProps = {
  contacts: []
}
Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Phonebook;