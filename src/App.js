import React from "react";
import { Routes, Route} from "react-router-dom";
import {Toaster} from 'react-hot-toast';

import Main from "./Home";
import Login from "./Login"

export default function app() {
    return (
      <div className="home">
        <Toaster
     position="top-right"
     toastOptions={{
       style: {
         fontSize: '1.8rem',
       },
     }}
    />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Main />} />
        </Routes>
      </div>
    );
  }
