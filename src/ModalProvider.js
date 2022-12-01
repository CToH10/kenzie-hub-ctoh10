import styled from "styled-components";

export const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(12, 10, 25, 0.4);
  backdrop-filter: blur(4px);
`;
