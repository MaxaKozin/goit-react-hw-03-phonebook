import React, { Component } from 'react';
import styles from './InputForm.module.css';
import PropTypes from 'prop-types';


class InputForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    name: '',
    number: ''
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' })
  }


  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name
          </label>
        <input
          id="name"
          type="text"
          onChange={this.handleChange}
          className={styles.input}
          name="name"
          value={this.state.name}
          placeholder='Name'
          autoComplete="off"
        />

        <label className={styles.label} htmlFor="number">
          Number
          </label>
        <input
          id="number"
          type="text"
          onChange={this.handleChange}
          className={styles.input}
          name="number" value={this.state.number}
          placeholder='Phone number'
          autoComplete="off"
        />
        <button type="submit" className={styles.btn}>Add contact</button>
      </form>
    );
  }
}

export default InputForm;