import React from "react";
import { TalkContainer } from "components/Chat/TalkContainer";
import type { Item } from "types";

const ITEMS = [
  { position: "right", type: "text", text: "こんにちは。" },
  {
    position: "left",
    type: "radio-form",
    text: "なにか御用でしょうか。",
    options: [
      { label: "用がある", value: "yes" },
      { label: "用はない", value: "no" },
    ],
  },
  { position: "right", type: "text", text: "特にないです。" },
  {
    position: "left",
    type: "check-form",
    text: "お好きな果物を全て選択してください。",
    options: [
      { label: "みかん", value: "orange" },
      { label: "りんご", value: "apple" },
      { label: "ぶどう", value: "grape" },
    ],
  },
] as Item[];

export const ChatComponent: React.FC = () => {
  return <TalkContainer items={ITEMS} />;
};
