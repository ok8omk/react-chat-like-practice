import type { Item } from "types";

export class User {
  say(text: string): Item {
    return {
      position: "right",
      type: "text",
      text,
    };
  }
}
