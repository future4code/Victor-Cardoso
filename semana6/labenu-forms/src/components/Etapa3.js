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

function Etapa3() {
  return (
    <Section>
      <h1>Informações gerais de ensino</h1>
      <Form action="">
        <Label htmlFor="">
          Por que você não terminou um curso de graduação?
        </Label>
        <Input type="text" />
        <Label htmlFor="">Você fez algum curso complementar?</Label>
        <Select name="" id="">
          <option value="" disabled>
            Nenhum
          </option>
          <option value="">Curso técnico</option>
          <option value="">Curso de inglês</option>
        </Select>
      </Form>
    </Section>
  );
}

export default Etapa3;
