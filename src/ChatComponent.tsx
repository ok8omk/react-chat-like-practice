import React from "react";
import { TalkContainer } from "components/Chat/TalkContainer";
import { useChat } from "hooks/useChat";
import { useProgress } from "hooks/useProgress";

export const ChatComponent: React.FC = () => {
  const [progress, proceedProgress] = useProgress();
  const items = useChat(progress, proceedProgress);

  return <TalkContainer items={items} />;
};
