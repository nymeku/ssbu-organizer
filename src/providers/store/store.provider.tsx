import { load, Store } from "@tauri-apps/plugin-store";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "./store.context";

type Props = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  const [store, setStore] = useState<Store>();
  const [modsPath, setModsPath] = useState("");

  useEffect(() => {
    load("store.json", { autoSave: true }).then((loadedStore) => {
      setStore(loadedStore);
    });
  }, []);

  if (!store) {
    return <></>;
  }

  store.get("mods_path").then((path) => {
    if (path) {
      setModsPath(path as string);
    }
  });

  return (
    <StoreContext.Provider value={{ store, modsPath }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
