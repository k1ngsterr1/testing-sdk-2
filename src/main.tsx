import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ReferenceContext, store } from "spark-admin-sdk";
import { Provider } from "react-redux";

import "./styles.css";
import "../node_modules/spark-admin-sdk/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReferenceContext>
        <App />
      </ReferenceContext>
    </Provider>
  </React.StrictMode>
);
