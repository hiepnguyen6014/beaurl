import React from "react";

interface User {
  token: string;
}

interface AuthContextProps {
  user: User;
  setUser: (user: User) => void;
}

const AuthContext = React.createContext<AuthContextProps>({
  user: {
    token: "",
  },
  setUser: () => {},
});

export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = React.useState<User>({
    token: "",
  });

  const value = React.useMemo(() => ({ user, setUser }), [user, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => React.useContext(AuthContext);

export default AuthContext;
