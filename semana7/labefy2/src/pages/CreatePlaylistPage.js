import React from "react";
import styled from "styled-components";

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

class CreatePlaylistPage extends React.Component {
  state = {
    playlists: [],
    playlistNameInput: "",
  };

  addPlaylist = () => {};
  render() {
    return (
      <Section>
        <Container>
          <Heading2>{this.props.title}</Heading2>
        </Container>
      </Section>
    );
  }
}

export default CreatePlaylistPage;
