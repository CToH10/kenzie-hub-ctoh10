import { StyledHeader, StyledButtonHeader, StyledModalHeader } from "./style";

export function Header({ children }) {
  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>
    </StyledHeader>
  );
}

export function ButtonHeader({ children }) {
  return (
    <StyledButtonHeader>
      <h1>Kenzie Hub</h1>
      {children}
    </StyledButtonHeader>
  );
}

export function ModalHeader({ children, text = "Kenzie Hub" }) {
  return (
    <StyledModalHeader>
      <h2>{text}</h2>
      {children}
    </StyledModalHeader>
  );
}
