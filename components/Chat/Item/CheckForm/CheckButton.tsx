import React from "react";
import styled from "@emotion/styled";
import { Colors } from "styles";

type Props = {
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

const Container = styled.label`
  display: block;
  background-color: ${Colors.base};
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  padding: 4px 8px;
`;

export const CheckButton: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Container>
      <input {...props} type="checkbox" />
      {label}
    </Container>
  );
};
