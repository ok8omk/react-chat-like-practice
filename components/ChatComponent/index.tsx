import React from "react";
import { Header } from "./Header";
import { Container } from "./Container";
import { Content } from "./Content";
import { InputArea } from "./InputArea";
import { MessageContextProvider } from "../../hooks/useMessageContext";

export const ChatComponent: React.FC = () => {
  return (
    <MessageContextProvider>
      <Container>
        <Header>あなたについて教えて下さい</Header>
        <Content />
        <InputArea />
      </Container>
    </MessageContextProvider>
  );
};
