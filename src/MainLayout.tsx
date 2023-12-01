import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./shared/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./shared/sidebar/Sidebar";
import UsersTable from "./components/user-table/UsersTable";
import NotFound from "./shared/not-found/NotFound";
import Profile from "./components/profile/components/Profile";
import { useUser } from "./shared/provider/user-provider/UserProvider";
import Loader from "./shared/loader/Loader";

const MainLayout = () => {
  const { isFetching }: any = useUser();

  if (isFetching) {
    return (
      <div className="text-2xl flex items-center h-screen justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <>
      <Sidebar />
      <main className="lg:pl-64">
        <Header />
        <Routes>
          <Route path="" element={<Outlet />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UsersTable />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default MainLayout;
