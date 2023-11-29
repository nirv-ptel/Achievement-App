import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import MainLayout from "./MainLayout";
import withAuthentication from "./shared/hoc/withAuthentication";
import withoutAuthentication from "./shared/hoc/withoutAuthentication";
import Login from "./shared/auth/components/Login";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";
import { UserProvider } from "./shared/provider/user-provider/UserProvider";
import NotFound from "./shared/not-found/NotFound";

function App() {
  const queryClient = new QueryClient();

  const UnAuthenticatedApp = () => {
    return <Outlet />;
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/*" element={withAuthentication(MainLayout)} />
              <Route element={withoutAuthentication(UnAuthenticatedApp)}>
                <Route path="/" element={<Dashboard />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
