import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import {LocalRoutes} from "./LocalRoutes";
import {Header} from "./common/Header/Header";

export function App() {
  return (
    <div className={'app'}>
      <HashRouter>
        <Header/>
        <LocalRoutes/>
      </HashRouter>
    </div>
  );
}
