import React from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteButton }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li className={s.contactListItem} key={contact.id}>
              <span>{contact.name}:</span>
              <span> {contact.number}</span>
              <button
                className={s.deleteButton}
                type="button"
                id={contact.id}
                onClick={onDeleteButton}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <span></span>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteButton: PropTypes.func,
};
