import React from 'react';
import PropTypes from 'prop-types';

import s from './Phonebook.module.css';

const Phonebook = ({ contacts, onDelete }) => {
  return (

    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        name && (<li className={s.item} key={id}>
          <span>{name} : {number}</span>
          <button type="button" className={s.close} onClick={() => onDelete(id)}>+</button>
        </li>)
      ))}
    </ul>

  )
}
Phonebook.defaultProps = {
  contacts: []
}
Phonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Phonebook;