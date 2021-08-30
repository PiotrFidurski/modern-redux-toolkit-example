import React, { useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  decrement,
  increment,
  incrementBy,
} from "./features/counter/counterSlice";
import { useFetchItemsQuery } from "./features/items/itemsApiSlice";
import logo from "./logo.svg";

function App() {
  const [numItems, setNumItems] = useState(50);

  const { data = [], isLoading } = useFetchItemsQuery(numItems);

  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  if (isLoading && !data) return <div>loading data...</div>;

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
        <div>Items here: </div>
        <div>
          <p>items to fetch</p>
          <select
            value={numItems}
            onChange={(e) => setNumItems(Number(e.target.value))}
          >
            <option value="55">55</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="90">90</option>
          </select>
        </div>
        <p>number of items : {data.length}</p>
        {data.map((item) => (
          <div key={item.id}>
            <div>
              <p>{item.name}</p>
            </div>
            <div>
              <p>rarity: {item.rarity}</p>
            </div>
            <img src={item.icon} style={{ width: "50px", height: "50px" }} />
          </div>
        ))}
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
