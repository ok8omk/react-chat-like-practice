import React from "react";
import { TalkContainer } from "components/Chat/TalkContainer";
import { useChat } from "hooks/useChat";

export const ChatComponent: React.FC = () => {
  const items = useChat();

  return <TalkContainer items={items} />;
};
