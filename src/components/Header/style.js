import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5vh auto 4vh;
  width: 90%;

  h1 {
    color: var(--color-primary);
    font-weight: var(--font-weight-1);
  }
`;

export const StyledButtonHeader = styled(StyledHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5vh auto 4vh;

  width: 90%;

  a,
  button {
    text-align: center;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    padding: 1.5vh 2vw;
  }

  button:hover {
    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
  }
`;

export const StyledModalHeader = styled(StyledButtonHeader)`
  width: 100%;
  border-radius: 4px 4px 0 0;
  background-color: var(--grey-2);
  margin: 0;
  padding: 2vh 2vw;
  justify-content: center;

  h2 {
    color: var(--grey-0);
    font-weight: var(--font-weight-1);
    font-size: 14px;
  }
`;
