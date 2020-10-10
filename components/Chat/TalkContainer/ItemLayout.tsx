import React from "react";
import styled from "@emotion/styled";
import type { Position } from "types";

type Props = {
  position: Position;
};

const Base = styled.div`
  display: flex;
  width: 100%;
  margin: 8px auto;
`;
const LayoutLeft = styled(Base)``;
const LayoutRight = styled(Base)`
  justify-content: flex-end;
`;
const LayoutCenter = styled(Base)`
  justify-content: center;
`;

export const ItemLayout: React.FC<Props> = ({ position, children }) => {
  switch (position) {
    case "left":
      return <LayoutLeft>{children}</LayoutLeft>;
    case "right":
      return <LayoutRight>{children}</LayoutRight>;
    case "center":
      return <LayoutCenter>{children}</LayoutCenter>;
  }
};
