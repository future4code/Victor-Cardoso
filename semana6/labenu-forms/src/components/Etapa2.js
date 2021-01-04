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

function Etapa2() {
  return (
    <Section>
      <h1>Informações do ensino</h1>
      <Form>
        <Label htmlFor="course">Qual curso?</Label>
        <Input type="text" />
        <Label htmlFor="teachingUnit">Qual a unidade de ensino?</Label>
        <Input type="text" />
      </Form>
    </Section>
  );
}

export default Etapa2;
