import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardView from "./views/dashboard.view";
import "./App.css";
import { StoreProvider } from "./providers/store/store.provider";
import { ThemeProvider } from "./providers/theme/theme.provider";
import CharactersView from "./views/characters.view";
import SettingsView from "./views/settings.view";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);
