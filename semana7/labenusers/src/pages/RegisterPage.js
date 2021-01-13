import React from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 75%;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #c4d585;
  border-radius: 5px;
`;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 1000;
  font-family: "Carme", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0.5rem 1rem;
  background-color: #c1d37f;
  color: #fff;
  align-self: flex-end;

  &:hover {
    background-color: #b5cb67;
  }
`;

const Heading2 = styled.h2`
  padding: 1rem;
`;

class RegisterPage extends React.Component {
  state = {
    users: [],
    nameInputValue: "",
    emailInputValue: "",
  };

  onChangeName = (event) => {
    this.setState({ nameInputValue: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ emailInputValue: event.target.value });
  };

  // Get users list
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

  // Create a user
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
        this.setState({ nameInputValue: "", emailInputValue: "" });
        this.getUsers();
        return response;
      })
      .catch((error) => {
        console.log(`Erro: ${error.message}`);
      });
  };
  render() {
    const title = "Register";
    return (
      <Container>
        <Heading2>{title}</Heading2>
        <Form>
          <Container>
            <label htmlFor="">Name</label>
            <Input
              type="text"
              value={this.state.nameInputValue}
              onChange={this.onChangeName}
            />
          </Container>
          <Container>
            <label htmlFor="">Email</label>
            <Input
              type="text"
              value={this.state.emailInputValue}
              onChange={this.onChangeEmail}
            />
          </Container>
        </Form>
        <Button type="submit" onClick={this.addUser}>
          criar
        </Button>
      </Container>
    );
  }
}

export default RegisterPage;
