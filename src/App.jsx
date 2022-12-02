import { StyledApp } from "./AppStyle";
import { RoutesComp } from "./routes";

function App() {
  window.document.title = "KenzieHub";
  return (
    <StyledApp className="App">
      <RoutesComp />
    </StyledApp>
  );
}

export default App;
