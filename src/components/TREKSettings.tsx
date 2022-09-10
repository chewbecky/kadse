import {
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Settings } from "../pages/Pomodoro";
import TREKButton from "./TREKButton";

const timerSettings: Settings = {
  work: { title: "Work Cycle - 25", duration: 25 },
  longBreak: { title: "Regeneration - 15", duration: 15 },
  shortBreak: { title: "Regeneration - 5", duration: 10 },
  cycles: 3,
};

type FormValues = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  cycles: number;
};

const TREKSettings = (props: any) => {
  const [settings, setSettings] = useState<Settings>(timerSettings);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      pomodoro: settings.work.duration / 60,
      shortBreak: settings.shortBreak.duration / 60,
      longBreak: settings.longBreak.duration / 60,
      cycles: settings.cycles,
    },
  });

  useEffect(() => {
    const storedValue = localStorage.getItem("pomodoro");

    if (!storedValue) {
      localStorage.setItem("pomodoro", JSON.stringify(timerSettings));
    } else {
      setSettings(JSON.parse(storedValue));
    }
  }, []);

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

    console.log(data);

    localStorage.setItem("pomodoro", JSON.stringify(newSettings));
  };

  return (
    <chakra.form
      onSubmit={handleSubmit(onSubmit)}
      pl="12"
      display="flex"
      gap="4"
      alignItems="flex-end"
      flexDirection="column"
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
          defaultValue={settings.cycles}
          placeholder="hier was eingeben"
          name="cycles"
          register={register("cycles")}
        />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <hr></hr>
      <TREKButton label="Submit" type="submit" />
    </chakra.form>
  );
};

type TREKNumberInputProps = NumberInputProps & {
  label: string;
  placeholder: string;
  register: any;
};

const TREKNumberInput = (props: TREKNumberInputProps) => {
  console.log(props.defaultValue, props.register);
  return (
    <>
      <FormLabel htmlFor={props.name} fontSize="2xl">
        {props.label}
      </FormLabel>
      <NumberInput color="lightblue" defaultValue={props.value}>
        <NumberInputField
          {...props.register}
          fontSize="2xl"
          placeholder={props.placeholder}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
};

export default TREKSettings;
