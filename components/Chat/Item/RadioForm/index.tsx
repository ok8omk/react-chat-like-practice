import React from "react";
import type { RadioFormProps } from "types";
import { Container } from "./Container";
import { RadioButton } from "./RadioButton";
import { Text } from "./Text";
import { AnswerButton } from "./AnswerButton";
import { useRadioForm } from "./useRadioForm";

export const RadioForm: React.FC<RadioFormProps> = ({
  text,
  name,
  options,
  onAnswer,
}) => {
  const [value, answered, onChange, onClickAnswerButton] = useRadioForm(
    onAnswer
  );

  return (
    <Container>
      {text && text.length > 0 && <Text>{text}</Text>}
      {options.map((option) => {
        return (
          <RadioButton
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            checked={option.value === value}
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
