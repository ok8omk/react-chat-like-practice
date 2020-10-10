import React from "react";

export const useRadioForm = (
  onAnswer: (value: string) => void
): [
  string,
  boolean,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [value, setValue] = React.useState<string>("");
  const [answered, setAnswered] = React.useState(false);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  const onClickAnswerButton = React.useCallback(() => {
    onAnswer(value);
    setAnswered(true);
  }, [value]);

  return [value, answered, onChange, onClickAnswerButton];
};
