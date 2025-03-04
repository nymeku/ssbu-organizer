import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardView from "./views/dashboard.view";
import "./App.css";
import { StoreProvider } from "./providers/store/store.provider";
import { ThemeProvider } from "./providers/theme/theme.provider";
import CharactersView from "./views/characters.view";
import SettingsView from "./views/settings.view";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DashboardView />} />
            <Route path='/characters' element={<CharactersView />} />
            <Route path='/settings' element={<SettingsView />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);
