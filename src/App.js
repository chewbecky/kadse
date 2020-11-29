import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { ButtonGroup, Heading } from "@chakra-ui/react";
import TREKProgress from "./components/TREKProgress/TREKProgress";
import TREKBox from "./components/TREKBox";
import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);

  return (
    <div className="App">
      <div className="actions">
        <Heading as="h1" fontWeight="400" size="4xl" color="brand.orange">
          pomodoro timer
        </Heading>
        <Heading as="h3" fontWeight="400" size="4xl" color="brand.orange">
          {timer}
        </Heading>
        <ButtonGroup>
          <TREKButton
            label="pomodoro"
            color="darkCoral"
            onclick={() => setTimer(25)}
          />
          <TREKButton
            label="long break"
            color="orange"
            onclick={() => setTimer(15)}
          />
          <TREKButton
            label="short break"
            color="orange"
            onclick={() => setTimer(5)}
          />
          <TREKButton
            label="start"
            color="lightGreen"
            onclick={() => setTimer(25)}
          />
        </ButtonGroup>
        <TREKProgress seconds={timer} />
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
