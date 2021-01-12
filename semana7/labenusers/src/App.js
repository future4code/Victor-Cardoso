import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    nameInputValue: "",
    emailInputValue: "",
  };

  getUsers = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "victor-cardoso-epps",
        },
      }
    );

    request
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log("Erro: ", error);
      });
  };

  addUser = () => {
    const user = {
      name: this.state.nameInputValue,
      email: this.state.emailInputValue,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      user,
      {
        headers: {
          Authorization: "victor-cardoso-epps",
        },
      }
    );

    request
      .then((response) => {
        this.setState({ user: { name: "", email: "" } });
        this.getUsers();
      })
      .catch((error) => {
        console.log(`Erro: ${error.message}`);
      });
  };

  onChangeName = (event) => {
    this.setState({ nameInputValue: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ emailInputValue: event.target.value });
  };

  componentDidMount = () => {
    this.getUsers();
  };

  render() {
    const usersList = this.state.users.map((user) => {
      return <div key={user.id}>{user.name}</div>;
    });
    return (
      <div className="App">
        <h1>hello world!</h1>

        <div>{usersList}</div>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={this.state.nameInputValue}
            onChange={this.onChangeName}
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={this.state.emailInputValue}
            onChange={this.onChangeEmail}
          />
          <button type="submit" onClick={this.addUser}>
            criar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
