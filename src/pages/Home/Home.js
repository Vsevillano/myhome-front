import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false)
  
  useEffect(() => {
    if (currentUser?.roles.find(item => item === 'ROLE_ADMIN') === 'ROLE_ADMIN') {
      setIsAdmin(true)            
    }    
  }, [currentUser])
  

  return (
    currentUser ? (
      isAdmin ? (
        <>Esto solo lo ve el ROLE_ADMIN</>
      ): (
        <>Esto lo ve el usuario con ROLE_USER</>
      )
    ): (
      <>Lo ve el usuario sin logear</>
    )
    
  )
}
