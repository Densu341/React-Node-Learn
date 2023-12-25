import React from "react";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { deleteContact, getContacts } from "../utils/data";
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchPArams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage keyword={keyword} keywordChange={changeSearchPArams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getContacts(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteContact(id);

    this.setState(() => {
      return {
        contacts: getContacts(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomePageWrapper;
