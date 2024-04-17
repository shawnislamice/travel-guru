import { createContext } from "react";




const values ={name:'Shawon Islam'}
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
