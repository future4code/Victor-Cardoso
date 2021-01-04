import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const Label = styled.label`
  padding: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #1e1e1e;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;

function Etapa1() {
  return (
    <Section>
      <h1>Dados Gerais</h1>
      <Form>
        <Label htmlFor="name">Nome</Label>
        <Input type="text" />

        <Label htmlFor="age">Idade</Label>
        <Input type="text" />

        <Label htmlFor="email">Email</Label>
        <Input type="text" />

        <Label htmlFor="educationLevel">Grau de Escolaridade</Label>
        <Select name="educationLevel" id="educationLevel">
          <option value="EMIncompleto">Ensino Médio Incompleto</option>
          <option value="EMCompleto">Ensino Médio Completo</option>
          <option value="ESIncompleto">Ensino Superior Incompleto</option>
          <option value="ESCompleto">Ensino Superior Completo</option>
        </Select>
      </Form>
    </Section>
  );
}

export default Etapa1;
