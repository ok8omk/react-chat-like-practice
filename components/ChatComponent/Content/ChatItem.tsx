import React from "react";
import styled from "@emotion/styled";

type Props = {
  message: string;
  layout: "left" | "right";
};

const Baloon = styled.span`
  border: solid 1px #444444;
  border-radius: 4px;
  padding: 4px;
`;

const LayoutBaloonLeft = styled.div`
  width: 100%;
  text-align: left;
  margin: 8px 0;
`;

const LayoutBaloonRight = styled.div`
  width: 100%;
  text-align: right;
  margin: 8px 0;
`;

export const ChatItem: React.FC<Props> = ({ message, layout }) => {
  if (layout === "left") {
    return (
      <LayoutBaloonLeft>
        <Baloon>{message}</Baloon>
      </LayoutBaloonLeft>
    );
  } else {
    return (
      <LayoutBaloonRight>
        <Baloon>{message}</Baloon>
      </LayoutBaloonRight>
    );
  }
};
