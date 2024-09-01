import React, { createContext, useEffect, useState, ReactNode } from "react";
import { getAuth, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";


type AppProps = {
    children: ReactNode;
};


interface AuthContextType {
    user: User  | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}


export const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: AppProps) {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const auth = getAuth();
    
    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged(async (user) => {
            if (user?.uid) {
                setUser(user);
                const token = await user.getIdToken();
                if (token !== localStorage.getItem("accessToken")) {
                    localStorage.setItem("accessToken", token);
                    window.location.reload();
                }
                setIsLoading(false);
                return;
            }
            setUser(null);
            setIsLoading(false);
            localStorage.clear();
            navigate("/login");
        });

        return () => {
            unsubcribed();
        };
    }, [auth]);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {isLoading ? <CircularProgress /> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;