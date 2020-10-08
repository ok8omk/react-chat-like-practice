import React from "react";
import { Container } from "./Container";
import { ChatItem } from "./ChatItem";
import { Frame } from "./Frame";
import { useMessageContext } from "../../../hooks/useMessageContext";

export const Content: React.FC = () => {
  const frameRef = React.useRef<HTMLDivElement>(null);
  const { state } = useMessageContext();

  React.useEffect(() => {
    if (frameRef.current) {
      frameRef.current.scrollTop = frameRef.current.scrollHeight;
    }
  }, [state.messages]);

  return (
    <Frame ref={frameRef}>
      <Container>
        {state.messages.map((message) => {
          return (
            <ChatItem
              key={message.text}
              message={message.text}
              layout={message.from === "me" ? "right" : "left"}
            />
          );
        })}
      </Container>
    </Frame>
  );
};
