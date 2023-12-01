import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainLayout from "./MainLayout";
import withAuthentication from "./shared/hoc/withAuthentication";
import withoutAuthentication from "./shared/hoc/withoutAuthentication";
import { UserProvider } from "./shared/provider/user-provider/UserProvider";

import Login from "./shared/auth/components/Login";
import NotFound from "./shared/not-found/NotFound";
import Dashboard from "./components/dashboard/Dashboard";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
              <Route path="/*" element={withAuthentication(MainLayout)}>
                <Route path={"users"} element={<Dashboard />} />
              </Route>
              <Route element={withoutAuthentication(UnAuthenticatedApp)}>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </UserProvider>
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
