import { DataProvider } from "./providers/DataProvider";
import { AuthProvider } from "./providers/AuthProvider";
import ScreenManager from "../src/components/ScreenManager";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <ScreenManager />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
