import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export default function Input<T extends FieldValues>({
  register,
  errors,
  name,
  label,
  helperText,
  isRequired = false,
  ...rest
}: {
  isRequired?: boolean;
  label?: string;
  helperText?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
} & ChakraInputProps) {
  const errorMessage = errors[name]?.message;

  return (
    <FormControl isRequired={isRequired} isInvalid={Boolean(errorMessage)}>
      {label && <FormLabel fontSize="sm">{label}</FormLabel>}
      <ChakraInput size="sm" {...rest} {...register(name)} />
      {!errorMessage && helperText && (
        <FormHelperText fontSize="sm">{helperText}</FormHelperText>
      )}
      {errorMessage && (
        <FormErrorMessage fontSize="sm">
          {String(errorMessage)}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
