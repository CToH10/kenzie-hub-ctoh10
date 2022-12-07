import { StyledApp } from "./AppStyle";
import { TechProvider } from "./Contexts/TechContext";
import { UserProvider } from "./Contexts/UserContext";
import { RoutesComp } from "./routes";

function App() {
  window.document.title = "KenzieHub";
  return (
    <StyledApp className="App">
      <UserProvider>
        <TechProvider>
          <RoutesComp />
        </TechProvider>
      </UserProvider>
    </StyledApp>
  );
}

export default App;
