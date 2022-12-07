import styled from "styled-components";
import { StyledMain } from "../../styles/Main";

export const DashMain = styled(StyledMain)`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  max-width: 880px;
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
    max-width: 40px;
    max-height: 30px;
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
  padding-left: clamp(5px, 2vw, 15px);
  padding-right: clamp(5px, 2vw, 15px);
  padding-top: clamp(5px, 1.5vh, 10px);
  padding-bottom: clamp(5px, 1.5vh, 10px);

  li {
    background-color: var(--grey-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: clamp(5px, 2vw, 15px);
    padding-right: clamp(5px, 2vw, 15px);
    padding-top: clamp(5px, 1.5vh, 10px);
    padding-bottom: clamp(5px, 1.5vh, 10px);
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
  p:hover {
    background-color: var(--grey-2);
    color: var(--grey-0);
  }

  .buttons {
    display: flex;
    gap: 3px;
  }

  button {
    border: none;
    border-radius: 4px;
    background-color: var(--grey-3);
    width: 4vw;
    min-width: 24px;
    height: 4vh;
    max-width: 40px;
    max-height: 30px;
  }

  button:hover {
    background-color: var(--grey-4);
  }
`;
