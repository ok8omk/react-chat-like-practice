import React from "react";
import { Input } from "./Input";
import { Container } from "./Container";
import { useInputMessage } from "../../../hooks/useInputMessage";

export const InputArea: React.FC = () => {
  const [value, onChange, onSend] = useInputMessage();

  return (
    <Container>
      <Input value={value} onChange={onChange} />
      <button type="button" onClick={onSend}>
        Send
      </button>
    </Container>
  );
};
