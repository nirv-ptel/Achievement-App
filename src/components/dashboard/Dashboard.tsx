import { useUser } from "../../shared/provider/user-provider/UserProvider";

const Dashboard = () => {
  const { user }: any = useUser();
  return (
    <>
      <p>Welcome to {user?.email}!</p>
    </>
  );
};

export default Dashboard;
