import React from "react";
import s from "../ContactInput/ContactInput.module.css";
import PropTypes from "prop-types";

class ContactInput extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleGetValue = (evt) => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  handleSaveName = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.whenSubmit(name, number);
    this.setState({ name: "" });
    this.setState({ number: "" });
  };

  render() {
    const { handleSaveName, handleGetValue } = this;
    return (
      <section className={s.section}>
        <div className={s.container}>
          <h1>Phonebook</h1>
          <form name="phoneBook" onSubmit={handleSaveName}>
            <label className={s.inputLabel}>
              Name
              <input
                onChange={handleGetValue}
                value={this.state.name}
                className={s.contactInput}
                type="text"
                autoComplete="off"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>

            <label className={s.inputLabel}>
              Number
              <input
                onChange={this.handleGetValue}
                value={this.state.number}
                type="tel"
                className={s.contactInput}
                name="number"
                autoComplete="off"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>

            <button type="submit" className={s.inputButton}>
              Add contacts
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactInput;

ContactInput.propTypes = { whenSubmit: PropTypes.func };
