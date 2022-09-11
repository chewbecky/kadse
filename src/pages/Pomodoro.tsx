import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// @ts-ignore
import TREKButton from "../components/TREKButton";
import TREKConsoleWidget from "../components/TREKConsoleWidget";
import TREKNumberGrid from "../components/TREKNumberGrid";
import TREKSpaceConsole from "../components/TREKSpaceConsole";
import TREKTemplate from "../components/TREKTemplate";
import TREKTimer from "../components/TREKTimer/TREKTimer";
import "../theme";

export interface Setting {
  title: string;
  duration: number;
}

export interface Settings {
  work: Setting;
  longBreak: Setting;
  shortBreak: Setting;
  cycles: number;
}

const defaultTimerSettings: Settings = {
  work: { title: "Work Cycle - 25", duration: 1500 },
  longBreak: { title: "Regeneration - 15", duration: 900 },
  shortBreak: { title: "Regeneration - 5", duration: 300 },
  cycles: 3,
};

function Pomodoro() {
  const [timer, setTimer] = useState(0);
  const [toggleActive, setToggleActive] = useState(false);
  const [reset, setReset] = useState(false);

  const [currentTimerSettings, setCurrentTimerSettings] = useState<any>();
  const [numOfShortBreaks, setNumOfShortBreaks] = useState(0);
  const [timerSettings, setTimerSettings] = useState(defaultTimerSettings);

  useEffect(() => {
    const storedValue = localStorage.getItem("pomodoro");
    if (storedValue) {
      setTimerSettings(JSON.parse(storedValue));
    }
  }, []);

  const setOrResetTimer = function (setting: Setting) {
    if (timer === setting.duration) {
      setReset(!reset);
    } else {
      setTimer(setting.duration);
      setCurrentTimerSettings(setting.title);
    }
  };

  const handleTimeUp = () => {
    setTimeout(() => {
      if (currentTimerSettings === timerSettings.work.title) {
        if (numOfShortBreaks < timerSettings.cycles) {
          setOrResetTimer(timerSettings.shortBreak);
          setNumOfShortBreaks(numOfShortBreaks + 1);
        } else {
          setOrResetTimer(timerSettings.longBreak);
          setNumOfShortBreaks(0);
        }
      } else {
        setOrResetTimer(timerSettings.work);
      }
    }, 2000);
    setToggleActive(!toggleActive);
  };

  return (
    <Box bg="black">
      <TREKTemplate
        title={"Pomodoro Timer"}
        header={<TREKNumberGrid numberOfLines={5}></TREKNumberGrid>}
        controls={
          <SimpleGrid
            gridTemplateColumns={["1fr 1fr", "1fr 1fr", "192px 192px"]}
            gridTemplateRows="auto"
            gap="8px"
            maxW="392px"
          >
            <TREKButton
              label="Pomodoro"
              color="darkCoral"
              onClick={() => {
                setToggleActive(false);
                setOrResetTimer(timerSettings.work);
              }}
            >
              Pomodoro
            </TREKButton>
            <TREKButton
              label="long break"
              color="orange"
              onClick={() => {
                setOrResetTimer(timerSettings.longBreak);
              }}
            />
            <TREKButton
              label="short break"
              color="orange"
              onClick={() => {
                setOrResetTimer(timerSettings.shortBreak);
              }}
            />
            <TREKButton
              label="pause/resume"
              color="lightGreen"
              onClick={() => {
                setToggleActive(!toggleActive);
              }}
            />
          </SimpleGrid>
        }
        content={
          <TREKConsoleWidget
            showAim
            imgUrl="https://media4.giphy.com/media/RHIKETUlUINYvV7CAO/giphy.gif?cid=ecf05e47i6wbc1o661v4brw7w7xfm1soqj56vt4kjrt8soui&rid=giphy.gif&ct=g"
          />
        }
        contentfix={
          <Flex flexDirection="column" pl="14">
            <TREKTimer
              value={timer}
              toggleActive={toggleActive}
              reset={reset}
              onTimerUp={handleTimeUp}
            ></TREKTimer>
            <Heading
              as="h3"
              fontWeight="400"
              fontSize="64"
              color="orange"
              textAlign="right"
              pt="4"
              lineHeight="72px"
            >
              {currentTimerSettings}
            </Heading>
          </Flex>
        }
      ></TREKTemplate>
    </Box>
  );
}

export default Pomodoro;
