import React from "react";

export const useCheckForm = (
  onAnswer: (values: string[]) => void
): [
  string[],
  boolean,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [values, setValues] = React.useState<string[]>([]);
  const [answered, setAnswered] = React.useState(false);

  const onChange = React.useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      const index = values.indexOf(value);
      if (index === -1) {
        setValues([...values, value]);
      } else {
        setValues(values.filter((oldValue) => oldValue !== value));
      }
    },
    [values]
  );

  const onClickAnswerButton = React.useCallback(() => {
    onAnswer(values);
    setAnswered(true);
  }, [values]);

  return [values, answered, onChange, onClickAnswerButton];
};
