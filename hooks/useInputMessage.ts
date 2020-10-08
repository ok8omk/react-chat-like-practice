import React from "react";
import { useMessageContext } from "./useMessageContext";

export const useInputMessage = (): [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [value, setValue] = React.useState("");
  const { dispatch } = useMessageContext();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSend = () => {
    dispatch({ type: "send", payload: { from: "me", text: value } });
    setValue("");
  };

  return [value, onChange, onSend];
};
