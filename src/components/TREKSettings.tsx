import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";

type Settings = "pomodoro" | "longBreak" | "shortBreak";

const TREKSettings = (props: any) => {
  const { handleSubmit, errors, register, formState } = useForm();
  const [pomodoro, setPomodoro] = useState("25");
  const [longBreak, setLongBreak] = useState("15");
  const [shortBreak, setShortBreak] = useState("5");

  function onSubmit(values: Record<Settings, string>) {
    console.log(values);

    localStorage.setItem("pomodoro", values.pomodoro);
    localStorage.setItem("longBreak", values.longBreak);
    localStorage.setItem("shortBreak", values.shortBreak);

    console.log(
      localStorage.getItem("pomodoro"),
      typeof localStorage.getItem("pomodoro")
    );
  }

  useEffect(() => {
    const value1: any = localStorage.getItem("pomodoro")
      ? localStorage.getItem("pomodoro")
      : "";
    setPomodoro(value1);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="pomodoro">Pomodoro</FormLabel>
        <Input name="pomodoro" placeholder={pomodoro} ref={register} />
        <FormLabel htmlFor="longBreak">Long Break</FormLabel>
        <Input name="longBreak" placeholder={longBreak} ref={register} />
        <FormLabel htmlFor="shortBreak">Short Break</FormLabel>
        <Input name="shortBreak" placeholder={shortBreak} ref={register} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        colorScheme="teal"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default TREKSettings;
