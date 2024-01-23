import React from "react";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
// import { getContacts, deleteContact } from "../utils/data";
import { useSearchParams } from "react-router-dom";
import { getContacts, deleteContact } from "../utils/api";
// import { deleteContact } from "../utils/data";
import { LocaleConsumer } from "../contexts/LocaleContext";

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
      contacts: [],
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getContacts();

    this.setState(() => {
      return {
        contacts: data,
      };
    });
  }

  // onDeleteHandler(id) {
  //   deleteContact(id);

  //   this.setState(() => {
  //     return {
  //       contacts: getContacts(),
  //     };
  //   });
  // }

  async onDeleteHandler(id) {
    await deleteContact(id);

    const { data } = await getContacts();

    this.setState(() => {
      return {
        contacts: data,
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
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <section>
              <SearchBar
                keyword={this.state.keyword}
                keywordChange={this.onKeywordChangeHandler}
              />
              <h2>{locale === "id" ? "Daftar Kontak" : "Contacts List"}</h2>
              <ContactList
                contacts={contacts}
                onDelete={this.onDeleteHandler}
              />
            </section>
          );
        }}
      </LocaleConsumer>
    );
  }
}

export default HomePageWrapper;
