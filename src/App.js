import React, { Fragment } from "react";
import "./globals.css";
import Switch from "./components/switch";
// import './javascript/switch.js';

import Header from "../src/components/header.js";
import TopCardList from "./components/top-card-list.js";
import Overview from "../src/components/overview.js";

function App() {
  return (
    <Fragment>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </Fragment>
  );
}

export default App;
