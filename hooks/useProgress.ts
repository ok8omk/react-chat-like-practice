import React from "react";
import type { Progress } from "types";

export const useProgress = (): [Progress, () => void] => {
  const [progress, setProgress] = React.useState<Progress>("start");

  const proceedProgress = React.useCallback(() => {
    setProgress((progress) => {
      switch (progress) {
        case "start":
          return "motivation";
        case "motivation":
          return "certification";
        case "certification":
          return "end";
        case "end":
          return "end";
      }
    });
  }, []);

  return [progress, proceedProgress];
};
