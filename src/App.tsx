import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  decrement,
  increment,
  incrementBy,
} from "./features/counter/counterSlice";
import logo from "./logo.svg";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count is: {count}
          </button>
        </p>
        <p>
          <button onClick={() => dispatch(decrement())}>decrement</button>
        </p>
        <p>
          <button onClick={() => dispatch(incrementBy(4))}>incrementBy</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
