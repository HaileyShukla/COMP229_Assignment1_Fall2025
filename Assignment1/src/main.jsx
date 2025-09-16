/*
  File: main.jsx
  Student’s Name: Hailey Shukla
  StudentID: 301487045
  Date: 2025-09-15
  Purpose: App entry & router mount
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Router wrapper */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
