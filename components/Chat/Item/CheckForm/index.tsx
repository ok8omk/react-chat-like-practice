import React from "react";
import type { CheckFormProps } from "types";
import { Container } from "./Container";
import { CheckButton } from "./CheckButton";
import { Text } from "./Text";
import { AnswerButton } from "./AnswerButton";
import { useCheckForm } from "./useCheckForm";

export const CheckForm: React.FC<CheckFormProps> = ({
  text,
  name,
  options,
  onAnswer,
}) => {
  const [values, answered, onChange, onClickAnswerButton] = useCheckForm(
    onAnswer
  );
  return (
    <Container>
      {text && text.length > 0 && <Text>{text}</Text>}
      {options.map((option) => {
        return (
          <CheckButton
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            checked={values.includes(option.value)}
            onChange={onChange}
            disabled={answered}
          />
        );
      })}
      <AnswerButton onClick={onClickAnswerButton} disabled={answered}>
        決定
      </AnswerButton>
    </Container>
  );
};
