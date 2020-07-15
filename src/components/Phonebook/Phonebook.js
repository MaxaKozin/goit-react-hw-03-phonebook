import React from 'react';
import styles from './Phonebook.module.css';
import PropTypes from 'prop-types';

const Phonebook = ({ contacts, onDelete }) => {
  return (

    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        name && (<li className={styles.item} key={id}>
          <span>{name} : {number}</span>
          <button type="button" className={styles.close} onClick={() => onDelete(id)}>+</button>
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