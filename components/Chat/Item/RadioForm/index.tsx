import React from "react";
import { Container } from "./Container";
import { RadioButton } from "./RadioButton";
import { Text } from "./Text";
import { ConfirmButton } from "./ConfirmButton";
import type { RadioFormProps } from "types";

export const RadioForm: React.FC<RadioFormProps> = ({
  text,
  name,
  options,
}) => {
  return (
    <Container>
      {text && text.length > 0 && <Text>{text}</Text>}
      {options.map(({ label, value }) => {
        return (
          <RadioButton key={value} name={name} label={label} value={value} />
        );
      })}
      <ConfirmButton>決定</ConfirmButton>
    </Container>
  );
};
