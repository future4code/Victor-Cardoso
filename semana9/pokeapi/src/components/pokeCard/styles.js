import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  max-width: 100%;
  min-height: 250px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  background-color: #eee;
  color: #1e1e1e;
  box-shadow: 1px 3px 7px #7e7e7e;
  border-radius: 4px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
`;
export const ListItem = styled.li`
  margin: 0;
  padding: 0.25rem 1rem;
  list-style: none;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0.5rem;
`;
