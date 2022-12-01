import styled from "styled-components";
import { StyledMain } from "../../styles/Main";

export const DashMain = styled(StyledMain)`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  .greetings {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
  .greetings h2 {
    color: var(--grey-0);
    font-weight: var(--font-weight-1);
  }

  .greetings p {
    color: var(--grey-1);
    font-weight: var(--font-weight-4);
  }

  .techs {
    display: flex;
    justify-content: space-between;
  }

  .techs h3 {
    color: var(--grey-0);
    font-weight: var(--font-weight-2);
  }

  .techs button {
    border: 1px solid var(--grey-3);
    background-color: var(--grey-3);
    border-radius: 4px;
    width: 10vw;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .techs button:hover {
    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  background-color: var(--grey-3);
  border-radius: 4px;
  padding: 1.5vh 2vw;

  li {
    background-color: var(--grey-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5vh 2vw;
    border-radius: 4px;
  }

  h3 {
    color: var(--grey-0);
    font-weight: var(--font-weight-1);
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: var(--grey-1);
    font-weight: var(--font-weight-4);
  }

  li:hover,
  p :hover {
    background-color: var(--grey-2);
    color: var(--grey-0);
  }

  button {
    border: none;
    border-radius: 4px;
    background-color: inherit;
    width: 10vw;
    height: 4vh;
  }
`;
