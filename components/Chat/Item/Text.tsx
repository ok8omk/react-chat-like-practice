import React from "react";
import styled from "@emotion/styled";
import { Colors } from "styles";
import type { TextProps } from "types";

export const Container = styled.span`
  display: block;
  background-color: ${Colors.base};
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  padding: 4px 8px;
`;

export const Text: React.FC<TextProps> = ({ text }) => {
  return <Container>{text}</Container>;
};
