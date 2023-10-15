import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import  {publicRoutes} from "./router";
import {SkeletonTheme} from "react-loading-skeleton";


function App() {

  return (
      <>
          <SkeletonTheme baseColor={"#313131"} highlightColor={'#525252'}>
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
          </SkeletonTheme>
      </>
    );
}

export default App;
