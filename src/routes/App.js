import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { EditTodoPage } from './edit/EditTodoPage.js';
import { HomePage } from './home/HomePage.js';
import { NewTodoPage } from './new/NewTodoPage.js';
// import './App.css';


function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not found</p>}></Route>
      </Routes>
    </HashRouter>
  );
}

export {App};

