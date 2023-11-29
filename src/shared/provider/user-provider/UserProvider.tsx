/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ReactNode, createContext } from "react";
// import { useQuery } from "react-query";
// import { me } from "../../auth/api";

interface UserProviderProps {
  children: ReactNode;
}
interface UserContextType {
  email: string | null;
  token: string;
}
type SetUserDetailsType = React.Dispatch<React.SetStateAction<UserContextType>>;

const UserContext = createContext<UserContextType | undefined>(undefined);
const UserDispatchContext = createContext<SetUserDetailsType | undefined>(
  undefined
);

function UserProvider({ children }: UserProviderProps) {
  // const { data: response } = useQuery(["get-users"]);

  const token = "token123";

  return (
    <UserContext.Provider value={{ email: "email@gmail.com", token }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return React.useContext(UserContext);
};

export { UserProvider, UserContext, UserDispatchContext };
