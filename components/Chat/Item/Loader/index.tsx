import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { Colors } from "styles";

const Container = styled.span`
  display: block;
  background-color: ${Colors.base};
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  padding: 4px 8px;
  vertical-align: middle;
`;

const skBouncedelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1.0);
  }
`;

const LoaderContainer = styled.div`
  display: inline-block;
  & > div {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #333;
    border-radius: 100%;
    animation: ${skBouncedelay} 1.5s infinite ease-in-out both;
  }
  & > div:not(:first-of-type) {
    margin-left: 4px;
  }
  & > div.bounce1 {
    animation-delay: -0.32s;
  }
  & > div.bounce2 {
    animation-delay: -0.16s;
  }
`;

export const Loader: React.FC = () => {
  return (
    <Container>
      <LoaderContainer>
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </LoaderContainer>
    </Container>
  );
};
