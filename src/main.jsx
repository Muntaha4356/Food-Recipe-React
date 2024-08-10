import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from './component/context/FavoriteProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </FavoritesProvider>,
)
