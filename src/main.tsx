import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo/client.ts";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ScrollToTop />
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
