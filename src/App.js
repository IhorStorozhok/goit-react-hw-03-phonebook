import React from "react";

import "./App.css";
import ContactInput from "./Components/ContactInput/ContactInput";
import ContactList from "./Components/ContactList/ContactsList";
import { nanoid } from "nanoid";
import Filter from "./Components/Filter/Filter";
import toast, { Toaster } from "react-hot-toast";

class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    if (localStorage.contacts) {
      const contactsFromLocalStorage = JSON.parse(
        localStorage.getItem("contacts")
      );

      this.setState({ contacts: contactsFromLocalStorage });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }
  //Add contact to contacts
  contactsAdder = (name, number) => {
    const namesArray = this.state.contacts.map((contact) => {
      return contact.name;
    });

    namesArray.includes(name)
      ? toast.error(`${name} is already in contacts `)
      : this.setState((prevState) => ({
          contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
        }));
  };

  //Remove contact from contacts

  contactsRemover = (e) => {
    const deletedContactIndex = this.state.contacts.findIndex((el) => {
      return el.id === e.currentTarget.id;
    });

    this.state.contacts.splice(deletedContactIndex, 1);
    this.setState({ contacts: this.state.contacts });
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  filterAdder = (filterQuery) => {
    this.setState({ filter: filterQuery });
  };

  render() {
    const { contactsAdder, filterAdder, contactsRemover } = this;
    const { contacts, filter } = this.state;

    //prepared filter`s value for function

    const filterLowCase = filter.toLowerCase();
    const FiltredContacts = contacts.filter((cont) => {
      return cont.name.toLowerCase().includes(filterLowCase);
    });

    return (
      <>
        <ContactInput whenSubmit={contactsAdder} />
        {contacts.length === 0 ? (
          <p>Please add contacts</p>
        ) : (
          <>
            <h2>Contacts</h2>
            <Filter onFiltred={filterAdder} />
            <ContactList
              contacts={FiltredContacts}
              onDeleteButton={contactsRemover}
            />

            <Toaster />
          </>
        )}
      </>
    );
  }
}

export default Phonebook;
