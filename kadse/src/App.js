// import logo from './logo.svg';
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Progress value={20} size="md" colorScheme="pink" />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ButtonGroup>
          <Button colorScheme="blue">Button</Button>
          <Button colorScheme="blue">Button</Button>
          <Button colorScheme="blue">Button</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
