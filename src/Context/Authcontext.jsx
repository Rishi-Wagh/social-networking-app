import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser , setCurrentUser ] = useState(
       JSON.parse(localStorage.getItem('user')) || null
    );

    const login = () =>{
        setCurrentUser({
            id:1,
            name:'Jhon Cena',
            img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=6002'
        });

        console.log( currentUser);
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    },[currentUser])

    return(
        <AuthContext.Provider value={{ currentUser , login }}>
            {children}
        </AuthContext.Provider>
    );
}