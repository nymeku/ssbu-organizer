import "./App.css";
import PathDialog from "./components/dialogs/path-dialog";
import { StoreProvider } from "./providers/store/store.provider";

function App() {
  return (
    <StoreProvider>
      <PathDialog />
    </StoreProvider>
  );
}

export default App;
