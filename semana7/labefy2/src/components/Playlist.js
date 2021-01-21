import axios from "axios";
import React from "react";
import styled from "styled-components";

class Playlist extends React.Component {
  state = {
    tracks: [],
  };

  render() {
    return <div>{this.state.tracks}</div>;
  }
}

export default Playlist;
