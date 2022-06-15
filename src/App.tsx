import { useRoutes } from "react-router-dom";
import routes from "./router";
import { AuthProvider, RequireAuth } from "@/components/Auth";

function App() {
  const elements = useRoutes(routes);
  return (
    <AuthProvider>
      <RequireAuth>
        <>{elements}</>
      </RequireAuth>
    </AuthProvider>
  );
}

export default App;
