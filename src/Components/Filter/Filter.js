import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

class Filter extends React.Component {
  state = { query: "" };

  handleFilter = (e) => {
    this.setState({ query: e.currentTarget.value });
    this.props.onFiltred(e.currentTarget.value);
  };

  render() {
    const { query } = this.state;
    return (
      <label className={s.inputLabel}>
        Find contacts by name
        <input
          onChange={this.handleFilter}
          value={query}
          type="text"
          className={s.contactInput}
          name="filter"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </label>
    );
  }
}
export default Filter;

Filter.propTypes = { onFiltred: PropTypes.func };
