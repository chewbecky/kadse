import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { ButtonGroup, Heading } from "@chakra-ui/react";
<<<<<<< HEAD
<<<<<<< HEAD
import TREKProgress from "./components/TREKProgress";
import TREKBox from "./components/TREKBox";
=======
import TREKProgress from "./components/TREKProgress/TREKProgress";
>>>>>>> 💄 svg refactoring
=======
import TREKProgress from "./components/TREKProgress/TREKProgress";
>>>>>>> 7fa3b57d3038dbd5234ba17847bcf3cdc9622d55

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
