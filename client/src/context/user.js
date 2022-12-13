import React, { useEffect, useState } from 'react'

const UserContext = React.createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    useEffect(() =>{
        fetch("/staylogged").then((response)=> {
            if (response.ok) {
              response.json().then((u) => setUser(u))
            }
          })
    }, [])

  return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>

  );
}

export {UserContext, UserProvider}