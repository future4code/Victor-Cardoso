import React from "react";
import axios from "axios";
import styled from "styled-components";

// Styled Components

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  color: #664e4c;
  font-family: "Fraunces", serif;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  padding: 1rem;
  background-color: #f3edce;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Button = styled.button`
  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 1000;
  cursor: pointer;
  margin: 0.5rem 1rem;
  background-color: #c1d37f;
  color: #fff;

  &:hover {
    background-color: #b5cb67;
  }
  &.closing {
    line-height: 80%;
    font-size: 1.5rem;
    background-color: tomato;
    color: #fff;
  }
  &.closing:hover {
    background-color: #eb5339;
  }
`;

const Table = styled.table`
  border-radius: 5px;
  background-color: #f7f3de;
  width: 80%;
  margin: 1rem;
`;

const TableBody = styled.tbody`
  padding: 1rem;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3edce;
  margin: 0.5rem 0;
`;

const TableHeader = styled.th`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TableData = styled.td`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

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

const Heading1 = styled.h1`
  font-size: 2rem;
`;

const Heading2 = styled.h2`
  padding: 1rem;
`;

class App extends React.Component {
  state = {
    users: [],
    nameInputValue: "",
    emailInputValue: "",
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

  // Delete a user
  deleteUser = (userId) => {
    const request = axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
      {
        headers: {
          Authorization: "victor-cardoso-epps",
        },
      }
    );

    request
      .then((response) => {
        console.log(response);
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
      return (
        <TableRow key={user.id}>
          <TableData>
            <p>{user.name}</p>
          </TableData>
          <TableData>
            <p>{user.email}</p>
          </TableData>
          <TableData>
            <Button className="closing" onClick={this.deleteUser(user.id)}>
              X
            </Button>
          </TableData>
        </TableRow>
      );
    });

    return (
      <Main>
        <Header>
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
        </Header>

        <Section>
          <Heading1>Labenusers</Heading1>
          <Table>
            <TableBody>
              <TableRow>
                <TableHeader colSpan="1">Name</TableHeader>
                <TableHeader colSpan="1"></TableHeader>
                <TableHeader colSpan="1">Users: X</TableHeader>
              </TableRow>
              {usersList}
            </TableBody>
          </Table>
        </Section>

        <Footer>
          <Heading2>Footer</Heading2>
        </Footer>
      </Main>
    );
  }
}

export default App;
