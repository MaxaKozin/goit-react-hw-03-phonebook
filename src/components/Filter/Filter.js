import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={s.wrapper}>
    <label className={s.label}>
      Find by Name
    <input className={s.input} type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}