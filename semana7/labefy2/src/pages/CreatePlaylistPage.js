import React from "react";
import styled from "styled-components";
import axios from "axios";

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
`;

const Heading2 = styled.h2`
  padding: 1rem;
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

class CreatePlaylistPage extends React.Component {
  state = {
    myPlaylists: [],
    nameInputValue: "",
  };

  onChangeName = (event) => {
    this.setState({ nameInputValue: event.target.value });
  };

  getPlaylists = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "victor-cardoso-epps",
          },
        }
      );
      this.setState({ myPlaylists: response.data.result.list });
    } catch (error) {
      console.log(error.response);
    }
  };

  createPlaylist = async () => {
    const playlist = {
      name: this.state.nameInputValue,
    };
    try {
      const response = await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        playlist,
        {
          headers: {
            Authorization: "victor-cardoso-epps",
          },
        }
      );
      alert(`${playlist.name} created`);
      this.setState({ nameInputValue: response.data });
      this.getPlaylists();
    } catch (error) {
      // if (
      //   error.message === "There already is a playlist with a similiar name"
      // ) {
      //   alert("Nome da playlist já foi utilizado");
      // }
      console.log(`Erro: ${error.message}`);
    }
  };

  render() {
    return (
      <Section>
        <Container>
          <Heading2>{this.props.title}</Heading2>
          <Form>
            <Container>
              <label htmlFor="">Name</label>
              <Input
                type="text"
                value={this.state.nameInputValue}
                onChange={this.onChangeName}
              />
            </Container>
          </Form>
          <Button type="submit" onClick={this.createPlaylist}>
            criar
          </Button>
        </Container>
      </Section>
    );
  }
}

export default CreatePlaylistPage;
