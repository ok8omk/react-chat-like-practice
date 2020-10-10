import styled from "@emotion/styled";
import { Colors } from "styles";

export const Container = styled.div`
  background-color: ${Colors.base};
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  padding: 8px;

  & > label:not(:first-of-type) {
    margin-top: 8px;
  }
  & > button {
    margin-top: 8px;
  }
`;
