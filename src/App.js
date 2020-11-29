import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { ButtonGroup, Heading } from "@chakra-ui/react";
import TREKProgress from "./components/TREKProgress/TREKProgress";
import TREXBox from "./components/TREKBox";

function App() {
  return (
    <div className="App">
      <div className="actions">
        <Heading as="h1" fontWeight="400" size="4xl" color="brand.orange">
          pomodoro timer
        </Heading>
        <ButtonGroup>
          <TREKButton label="pomodoro" color="darkCoral" />
          <TREKButton label="long break" color="orange" />
          <TREKButton label="short break" color="orange" />
          <TREKButton label="start" color="lightGreen" />
        </ButtonGroup>
        <TREKProgress />
        <TREKBox title="test" tint="darkCoral" mirror="true" form="curve" />
        <TREKBox
          title="asdfasdfas"
          marginTop="2rem"
          tint="darkCoral"
          form="curve"
        />
        <TREKBox
          title="Ich teste weiter"
          marginTop="2rem"
          tint="orange"
          form="block"
          mirror
        />
      </div>
    </div>
  );
}

export default App;
