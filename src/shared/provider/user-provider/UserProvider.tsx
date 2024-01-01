/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ReactNode, createContext } from "react";
import { useQuery } from "react-query";
import { me } from "../../auth/api";
// import { useQuery } from "react-query";
// import { me } from "../../auth/api";

interface UserProviderProps {
  children: ReactNode;
}
interface UserContextType {
  user: string | null;
}
interface ProviderData {
  user: Record<string, string>;
  isLoading: boolean;
  refetchUser: CallableFunction;
}

type SetUserDetailsType = React.Dispatch<React.SetStateAction<UserContextType>>;

const UserContext = createContext<UserContextType | undefined | ProviderData>(
  undefined
);
const UserDispatchContext = createContext<SetUserDetailsType | undefined>(
  undefined
);

const UserProvider = ({ children }: UserProviderProps) => {
  const { data: response, isLoading } = useQuery(["getUsers"], me);

  return (
    <UserContext.Provider value={{ user: response?.data, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return React.useContext(UserContext);
};

export { UserProvider, UserContext, UserDispatchContext };
