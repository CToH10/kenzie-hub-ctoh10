import styled from "styled-components";
import { StyledMain } from "../../styles/Main";

export const FormsMain = styled(StyledMain)`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding: 2vh 2vw;
  border-radius: 4px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  height: fit-content;
  position: relative;
  top: 5vh;

  h2 {
    color: var(--grey-0);
    font-weight: var(--font-weight-1);
    text-align: center;
  }

  p {
    color: var(--grey-1);
    font-weight: var(--font-weight-4);
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    padding: 0 0 2vh 0;
  }

  a {
    text-align: center;
    color: var(--grey-0);
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    border-radius: 4px;
    padding: 1.5vh 0;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding: 1.5vh 1vw;

  label {
    color: var(--grey-0);
    font-weight: var(--font-weight-4);
  }

  .errorLabel {
    color: var(--color-primary);
  }

  input {
    border: 1px solid var(--grey-0);
    border-radius: 4px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    padding: 1.5vh 2vw;
  }

  select {
    border: 1px solid var(--grey-0);
    border-radius: 4px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    padding: 1.5vh 2vw;
  }

  input::placeholder {
    color: var(--grey-1);
  }

  input:focus,
  select:focus {
    outline: none;
  }

  /* input:: {
    background-color: var(--grey-2);
  } */

  button {
    background: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    color: var(--grey-0);
    padding: 1.5vh 0;
  }

  button:disabled {
    background: var(--color-primary-disabled);
    border: 1px solid var(--color-primary-disabled);
  }
`;
