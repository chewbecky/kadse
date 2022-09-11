import {
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from "@chakra-ui/react";

type TREKNumberInputProps = NumberInputProps & {
  label: string;
  placeholder: string;
  register: any;
};

export const TREKNumberInput = (props: TREKNumberInputProps) => {
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

export default TREKNumberInput;
