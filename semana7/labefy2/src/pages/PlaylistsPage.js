import axios from "axios";
import React from "react";
import styled from "styled-components";
import Playlist from "../components/Playlist";

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

const Text = styled.p`
  padding: 1rem;
  text-align: center;
`;

class PlaylistsPage extends React.Component {
  state = {
    myPlaylists: [],
    seeTracks: false,
  };

  componentDidMount = () => {
    this.getPlaylists();
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
      console.log(error.message);
    }
  };

  deletePlaylist = async (playlist) => {
    try {
      const response = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`,
        {
          headers: {
            Authorization: "victor-cardoso-epps",
          },
        }
      );
      this.getPlaylists();
      alert(`${playlist.name} deleted!`);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };

  getPlaylistById = async (playlist) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,
        playlist,
        {
          headers: {
            Authorization: "victor-cardoso-epps",
          },
        }
      );
      return response.data.results;
    } catch (error) {
      console.log(error.message);
    }
  };

  seeTracksBtn = () => {
    this.setState({ seeTracks: !this.state.seeTracks });
    // this.getPlaylistById(playlist);
  };

  render() {
    const myPlaylistsMap = this.state.myPlaylists.map((playlist) => {
      return (
        <TableRow key={playlist.id}>
          <TableData>{playlist.name}</TableData>
          <TableData>
            {!this.state.seeTracks ? (
              <button onClick={() => this.seeTracksBtn()}>
                See {playlist.name} tracks
              </button>
            ) : (
              <Playlist tracks={this.getPlaylistById(playlist.id)} />
            )}
          </TableData>
          <TableData>
            <Button
              className="closing"
              onClick={() => this.deletePlaylist(playlist)}
            >
              X
            </Button>
          </TableData>
        </TableRow>
      );
    });

    return (
      <Section>
        <Heading2>{this.props.title}</Heading2>
        <Table>
          <TableBody>
            <TableRow>
              <TableHeader colSpan="1">Name</TableHeader>
              <TableHeader colSpan="1"></TableHeader>
              <TableHeader colSpan="1">
                You have {myPlaylistsMap.length} playlists
              </TableHeader>
            </TableRow>
            {myPlaylistsMap.length === 0 ? (
              <Text>"You don't have any playlists."</Text>
            ) : (
              myPlaylistsMap
            )}
          </TableBody>
        </Table>
      </Section>
    );
  }
}

export default PlaylistsPage;
