import React from "react";
import styled from "@emotion/styled";
import { useInputMessage } from "../../../hooks/useInputMessage";

type Props = React.ComponentPropsWithoutRef<"input">;

const StyledInput = styled.input`
  flex-grow: 1;
`;

export const Input: React.FC<Props> = (props) => {
  return <StyledInput {...props} />;
};
