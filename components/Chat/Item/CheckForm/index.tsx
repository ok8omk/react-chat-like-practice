import React from "react";
import { Container } from "./Container";
import { CheckButton } from "./CheckButton";
import { Text } from "./Text";
import { ConfirmButton } from "./ConfirmButton";
import type { CheckFormProps } from "types";

export const CheckForm: React.FC<CheckFormProps> = ({
  text,
  name,
  options,
}) => {
  return (
    <Container>
      {text && text.length > 0 && <Text>{text}</Text>}
      {options.map(({ label, value }) => {
        return (
          <CheckButton key={value} name={name} label={label} value={value} />
        );
      })}
      <ConfirmButton>決定</ConfirmButton>
    </Container>
  );
};
