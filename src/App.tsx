import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import  {publicRoutes} from "./router";


function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  {publicRoutes.map(route => (
                      <Route
                          key={route.path}
                          path={route.path}
                          element={<route.element />}
                      />))}
                  <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
          </BrowserRouter>
      </>
    );
}

export default App;
