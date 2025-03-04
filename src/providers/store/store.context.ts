import { Store } from "@tauri-apps/plugin-store";
import { createContext } from "react";

type StoreContext = {
  store: Store | null;
  modsPath: string;
};

const defaultStoreContext = {
  store: null,
  modsPath: "",
};

export const StoreContext = createContext<StoreContext>(defaultStoreContext);
