import { DataProvider } from "./providers/DataProvider";
import { AuthProvider } from "./providers/AuthProvider";
import AppManager from "./AppManager";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <AppManager />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
