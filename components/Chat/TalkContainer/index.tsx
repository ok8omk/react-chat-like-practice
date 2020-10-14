import React from "react";
import { Container } from "./Container";
import { ItemLayout } from "./ItemLayout";
import { Text } from "../Item/Text";
import { RadioForm } from "../Item/RadioForm";
import { CheckForm } from "../Item/CheckForm";
import type { Item } from "types";
import { Loader } from "../Item/Loader";
import { useLoader } from "../Item/Loader/useLoader";

type Props = {
  items: Item[];
};

const SwitchItem: React.FC<Item> = (props) => {
  const loading = useLoader();

  if (props.loadingEffect && loading) return <Loader />;

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
            <SwitchItem {...item} loadingEffect={item.position === "left"} />
          </ItemLayout>
        );
      })}
    </Container>
  );
};
