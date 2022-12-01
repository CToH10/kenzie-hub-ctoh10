import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3.5vh;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    position: relative;
    top: 20%;
    bottom: 50%;
    left: 7%;
    right: 50%;
    width: 87vw;
    height: 48vh;
`;
