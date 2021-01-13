import React from "react";
import axios from "axios";
import styled from "styled-components";
import ProfilePage from "./ProfilePage";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

const Button = styled.button`
  padding: 0.6rem 0.7rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem 1rem;
  font-weight: 1000;
  line-height: 80%;
  font-size: 1.5rem;
  background-color: tomato;
  color: #fff;

  &:hover {
    background-color: #eb5339;
  }

  &.profileBtn {
    font-size: 1rem;
    /* color: #664e4c; */
    background-color: #c1d37f;
    font-weight: 1000;
    font-family: "Carme", sans-serif;
    text-transform: uppercase;
  }
  &.profileBtn:hover {
    background-color: #b5cb67;
  }
`;

class UsersPage extends React.Component {
  state = {
    users: [],
    user: { id: "", name: "", email: "" },
    profile: false,
  };

  componentDidMount = () => {
    this.getUsers();
  };

  onChangeProfile = () => {
    this.setState({ profile: !this.state.profile });
    this.setState({ user: this.state.user });
  };

  // Get users list
  getUsers = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "victor-cardoso-epps",
          },
        }
      );

      this.setState({ users: response.data });
    } catch (error) {
      console.log("Erro: ", error.response);
    }
  };

  // Get single user
  getUserById = async (userId) => {
    this.setState({ profile: !this.state.profile });
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "victor-cardoso-epps",
          },
        }
      );

      this.setState({ user: response.data[0] });
      return response.data;
    } catch (error) {
      console.log("Erro: ", error.response);
    }
  };

  // Delete a user
  deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "victor-cardoso-epps",
          },
        }
      );
      this.getUsers();
      return response;
    } catch (error) {
      console.log(`Erro: ${error.message}`);
    }
  };

  render() {
    const title = "Users";

    const usersList = this.state.users.map((user) => {
      return (
        <TableRow key={user.id}>
          <TableData>
            <p>{user.name}</p>
          </TableData>
          <TableData>
            <Button
              className="profileBtn"
              onClick={() => this.onChangeProfile(user)}
            >
              Profile
            </Button>
          </TableData>
          <TableData>
            <Button
              className="closing"
              onClick={() => this.deleteUser(user.id)}
            >
              X
            </Button>
          </TableData>
        </TableRow>
      );
    });

    return (
      <Section>
        {this.state.profile ? (
          <Container>
            {/* <button onClick={this.onChangeProfile}>Voltar</button> */}
            <ProfilePage
              key={this.state.user.id}
              name={this.state.user.name}
              email={this.state.user.email}
            />
          </Container>
        ) : (
          <Container>
            <h1>{title}</h1>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader colSpan="1">Name</TableHeader>
                  <TableHeader colSpan="1"></TableHeader>
                  <TableHeader colSpan="1">
                    Users: {usersList.length}
                  </TableHeader>
                </TableRow>
                {usersList}
              </TableBody>
            </Table>
          </Container>
        )}
      </Section>
    );
  }
}

export default UsersPage;
