import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "modern-normalize";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </StrictMode>
);
