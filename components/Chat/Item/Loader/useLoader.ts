import React from "react";

const LOADING_TIME = 2 as const;

const timeout = (timeoutSeconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeoutSeconds * 1000);
  });
};

export const useLoader = (): boolean => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let mount = true;

    (async () => {
      await timeout(LOADING_TIME);

      if (mount) {
        setLoading(false);
      }
    })();

    return () => {
      mount = false;
    };
  }, []);

  return loading;
};
