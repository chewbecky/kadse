import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { ButtonGroup, Heading } from "@chakra-ui/react";
import TREKProgress from "./components/Progress";

function App() {
  return (
    <div className="App">
      <div className="actions">
        <Heading as="h1" size="4xl" color="brand.orange">
          pomodoro timer
        </Heading>
        <ButtonGroup>
          <TREKButton label="pomodoro" color="brand.darkCoral" />
          <TREKButton label="long break" color="brand.orange" />
          <TREKButton label="short break" color="brand.orange" />
          <TREKButton label="start" color="brand.lightGreen" />
        </ButtonGroup>
        <TREKProgress />
      </div>
    </div>
  );
}

export default App;
