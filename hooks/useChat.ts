import React from "react";
import type { Item } from "types";
import {
  Concierge,
  MOTIVATION_OPTIONS,
  CERTIFICATION_OPTIONS,
} from "./Concierge";
import { User } from "./User";

export const useChat = () => {
  const user = React.useRef(new User());
  const concierge = React.useRef(new Concierge());

  const [items, setItems] = React.useState<Item[]>([]);

  const appendItem = React.useCallback((item: Item) => {
    setItems((oldItems) => [...oldItems, item]);
  }, []);

  const appendItems = React.useCallback((items: Item[]) => {
    setItems((oldItems) => [...oldItems, ...items]);
  }, []);

  React.useEffect(() => {
    appendItems([
      concierge.current.say("こんにちは！"),
      concierge.current.hearMotivation((value) => {
        appendItems([
          user.current.say(
            MOTIVATION_OPTIONS[value as keyof typeof MOTIVATION_OPTIONS]
          ),
          concierge.current.hearCertifications((values) => {
            appendItem(
              user.current.say(
                values
                  .map((value) => {
                    return CERTIFICATION_OPTIONS[
                      value as keyof typeof CERTIFICATION_OPTIONS
                    ];
                  })
                  .join(",")
              )
            );
          }),
        ]);
      }),
    ]);
  }, []);

  return items;
};
