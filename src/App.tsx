import React from "react";
import logo from "./logo.svg";
import "./output.css";
import Root from "./root";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Root />
      </Provider>
    </div>
  );
}

export default App;
