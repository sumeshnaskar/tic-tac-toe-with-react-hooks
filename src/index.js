import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GameContextProvider} from "./components/GameContext"
import {GlobalStyles} from "./global-styles"

ReactDOM.render(
    <GameContextProvider>
      <GlobalStyles/>
      <App />
    </GameContextProvider>,
  document.getElementById('root')
);

