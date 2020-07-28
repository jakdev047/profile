import React from 'react';
import { BrowserRouter } from "react-router-dom";

// css
import './asset/css/style.css';

// route
import AppRoute from './router/AppRoute';


function App() {
  return (
    <BrowserRouter>

      <AppRoute/>

    </BrowserRouter>
  );
}

export default App;
