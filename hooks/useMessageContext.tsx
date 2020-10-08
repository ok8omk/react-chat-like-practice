import React, { useReducer } from "react";
import type { Message } from "../types/Message";

type State = {
  messages: Message[];
};

type Action = {
  type: "send";
  payload?: Message;
};

const initialState: State = {
  messages: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "send":
      return {
        messages: Array.prototype.concat(
          state.messages,
          action.payload
        ) as Message[],
      };
  }
};

type ContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
const MessageContext = React.createContext<ContextProps>({} as ContextProps);

export const MessageContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  const { state, dispatch } = React.useContext(MessageContext);

  return { state, dispatch };
};
