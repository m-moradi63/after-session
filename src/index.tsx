
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react"
import { App } from "./App.tsx";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const container = document.getElementById("app");
if (container) {
    const root = createRoot(container)
    root.render(
        <BrowserRouter>
            <App />
           
        </BrowserRouter>

    );
}