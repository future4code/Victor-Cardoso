import React from "react";
import axios from "axios";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const ContainerB = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #bdefc8;
`;

const Card = styled.div``;

const Link = styled.a`
  color: #f5af00;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FormControl = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  &.type {
    align-items: flex-end;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #f5af00;
  width: 50%;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

class Cervejaria extends React.Component {
  state = {
    breweries: [],
    filterNameInput: "",
    filterTypeInput: "",
  };

  onChangeFilterName = (event) => {
    this.setState({ filterNameInput: event.target.value });
  };

  onChangeFilterType = (event) => {
    this.setState({ filterTypeInput: event.target.value });
  };

  getBreweries = async () => {
    try {
      const response = await axios.get(
        "https://api.openbrewerydb.org/breweries"
      );
      this.setState({ breweries: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getBreweries();
  }

  render() {
    // lista filtrada
    const filterBreweries = this.state.breweries
      // filtra por nome
      .filter((filteredBrewery) => {
        const nameLowercase = filteredBrewery.name.toLowerCase();
        if (nameLowercase.includes(this.state.filterNameInput)) {
          return true;
        }
      })
      // filtra por tipo
      .filter((filteredBrewery) => {
        const typeLowercase = filteredBrewery.brewery_type.toLowerCase();
        if (typeLowercase.includes(this.state.filterTypeInput)) {
          return true;
        }
      });
    return (
      <Section>
        <Form>
          <FormControl>
            <Label>Search by name:</Label>
            <Input
              type="text"
              value={this.state.filterNameInput}
              onChange={this.onChangeFilterName}
            ></Input>
          </FormControl>
          <FormControl className="type">
            <Label>Search by type:</Label>
            <Input
              type="text"
              value={this.state.filterTypeInput}
              onChange={this.onChangeFilterType}
            ></Input>
          </FormControl>
        </Form>
        <Card>
          {filterBreweries.map((brewery) => {
            return (
              <ContainerB key={brewery.id}>
                <p>
                  {brewery.name} is a {brewery.brewery_type} brewery.
                </p>
                <p>
                  Currently located on {brewery.street}, {brewery.city} -{" "}
                  {brewery.state}
                </p>
                <span>
                  You can call them at{" "}
                  <Link href={`tel:${brewery.phone}`}>{brewery.phone}</Link>, or
                  access{" "}
                  <Link href={brewery.website_url}>{brewery.website_url}</Link>{" "}
                  for more information.
                </span>
              </ContainerB>
            );
          })}
        </Card>
      </Section>
    );
  }
}

export default Cervejaria;
