import React from "react";
import { Container } from "./Container";
import { ItemLayout } from "./ItemLayout";
import { Text } from "../Item/Text";
import { RadioForm } from "../Item/RadioForm";
import { CheckForm } from "../Item/CheckForm";
import type { Item } from "types";

type Props = {
  items: Item[];
};

const SwitchItem: React.FC<Item> = (props) => {
  switch (props.type) {
    case "text":
      return <Text {...props} />;
    case "radio-form":
      return <RadioForm {...props} />;
    case "check-form":
      return <CheckForm {...props} />;
  }
};

export const TalkContainer: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      {items.map((item) => {
        return (
          <ItemLayout key={item.text} position={item.position}>
            <SwitchItem {...item} />
          </ItemLayout>
        );
      })}
    </Container>
  );
};
