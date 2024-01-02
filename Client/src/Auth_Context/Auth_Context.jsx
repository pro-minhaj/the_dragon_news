import React, { createContext } from 'react';
 
export const userContext = createContext(null);

const Auth_Context = ({children}) => {
    const user = null

    const authInfo = {
        user
    };

    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default Auth_Context;