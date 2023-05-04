import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export default function Textarea<T extends FieldValues>({
  register,
  errors,
  name,
  label,
  helperText,
  ...rest
}: {
  label?: string;
  helperText?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
} & ChakraTextareaProps) {
  const errorMessage = errors[name]?.message;

  return (
    <FormControl isInvalid={Boolean(errorMessage)}>
      {label && <FormLabel fontSize="sm">{label}</FormLabel>}
      <ChakraTextarea size="sm" {...rest} {...register(name)} />
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
