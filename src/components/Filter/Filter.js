import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>
      Find by Name
    <input className={styles.input} type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}