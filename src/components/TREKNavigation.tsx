import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import TREKBox from "./TREKBox";
import TREKWhiteNoise from "./TREKWhiteNoise";

interface TREKNavigationProps {}

const TREKNavigation: FunctionComponent<TREKNavigationProps> = (props) => {
  return (
    <Flex flexDirection="column" gap="2">
      <Link to="/">
        <TREKBox
          text="Pomodoro"
          tint="orange"
          form="block"
          height={48}
          mirror
        />
      </Link>
      <Link to="/settings">
        <TREKBox
          text="Settings"
          tint="orange"
          form="block"
          height={48}
          mirror
        />
      </Link>
      <TREKWhiteNoise />
    </Flex>
  );
};

export default TREKNavigation;
