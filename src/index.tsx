import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import { Root } from "components/Root";
import { Layout } from "components/Layout";
import { ChatComponent } from "./ChatComponent";

ReactDOM.render(
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
    <Root>
      <Layout>
        <ChatComponent />
      </Layout>
    </Root>
  </>,
  document.getElementById("root")
);
