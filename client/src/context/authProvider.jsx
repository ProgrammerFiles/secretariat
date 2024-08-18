import { createContext } from "react";
import { useState, useEffect } from "react";
import { GetAccessTokenCookie } from "../utils/token";


const authContext = createContext();


const AuthProvider = async ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    
}
 
export default AuthProvider;