import React, { useEffect, useState } from 'react'

const ReviewContext = React.createContext()

const ReviewProvider = ({children}) => {

    const [reviews, setReviews] = useState([])
    
    useEffect(() =>{
        fetch("/reviews").then((response)=> {
            if (response.ok) {
              response.json().then((u) => setReviews(u))
            }
          })
    }, [])


return (
    <ReviewContext.Provider value={{reviews, setReviews}}>
        {children}
    </ReviewContext.Provider>

  );
}

export {ReviewContext, ReviewProvider}