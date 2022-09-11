import {
  Box,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  SimpleGrid,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import {
  defaultTimerSettings,
  longerTimerSettings,
  Settings,
} from "../components/settings/defaultSettings";
// @ts-ignore
import TREKButton from "../components/TREKButton";
import TREKConsoleWidget from "../components/TREKConsoleWidget";
import TREKNumberGrid from "../components/TREKNumberGrid";
import { TREKNumberInput } from "../components/TREKNumberInput";
import TREKTemplate from "../components/TREKTemplate";
import "../theme";

type FormValues = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  cycles: number;
};

const localStorageItem = localStorage.getItem("pomodoro");

const currentSettings = localStorageItem
  ? JSON.parse(localStorageItem)
  : defaultTimerSettings;

const formValues = (settings: Settings): FormValues => {
  return {
    pomodoro: settings.work.duration / 60,
    shortBreak: settings.shortBreak.duration / 60,
    longBreak: settings.longBreak.duration / 60,
    cycles: settings.cycles,
  };
};

function SettingsPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: formValues(currentSettings),
    shouldUnregister: false,
  });

  const onSubmit = (data: FieldValues) => {
    const newSettings: Settings = {
      work: {
        title: `Work - ${data.pomodoro}`,
        duration: Number(data.pomodoro) * 60,
      },
      longBreak: {
        title: `Regeneration - ${data.longBreak}`,
        duration: Number(data.longBreak * 60),
      },
      shortBreak: {
        title: `Regeneration - ${data.shortBreak}`,
        duration: Number(data.shortBreak) * 60,
      },
      cycles: data.cycles,
    };
    localStorage.setItem("pomodoro", JSON.stringify(newSettings));
  };

  return (
    <Box bg="black">
      {" "}
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <TREKTemplate
          title={"Settings"}
          header={<TREKNumberGrid numberOfLines={5}></TREKNumberGrid>}
          controls={
            <SimpleGrid
              gridTemplateColumns={["1fr 1fr", "1fr 1fr", "192px 192px"]}
              gridTemplateRows="auto"
              gap="8px"
              maxW="392px"
            >
              <TREKButton
                label="Twenty-Five/Five"
                color="darkCoral"
                onClick={() => {
                  reset(formValues(defaultTimerSettings));
                }}
              ></TREKButton>
              <TREKButton
                label="Fifty/Ten"
                color="orange"
                onClick={() => {
                  reset(formValues(longerTimerSettings));
                }}
              />
              <TREKButton label=" " color="orange" disabled />
              <TREKButton label="Speichern" color="lightGreen" type="submit" />
            </SimpleGrid>
          }
          content={<TREKConsoleWidget />}
          contentfix={
            <Flex
              flexDirection="column"
              gap="4"
              pl="12"
              alignItems="flex-start"
            >
              <FormControl isInvalid={!errors}>
                <TREKNumberInput
                  label="Pomodoro"
                  placeholder="hier was eingeben"
                  register={register("pomodoro")}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!errors}>
                <TREKNumberInput
                  label="Short Break"
                  placeholder="hier was eingeben"
                  register={register("shortBreak")}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!errors}>
                <TREKNumberInput
                  label="Long Break"
                  placeholder="hier was eingeben"
                  register={register("longBreak", { min: 5, max: 9999 })}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!errors}>
                <TREKNumberInput
                  label="Cycles"
                  placeholder="hier was eingeben"
                  name="cycles"
                  register={register("cycles")}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Flex>
          }
        ></TREKTemplate>
      </chakra.form>
    </Box>
  );
}

export default SettingsPage;
