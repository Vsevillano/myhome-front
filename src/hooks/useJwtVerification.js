import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const useJwtVerification = (token) => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
      } catch (error) {
        console.error('Error decoding JWT token:', error);
        setDecodedToken(null);
      }
    } else {
      setDecodedToken(null);
    }
  }, [token]);

  return decodedToken;
};

export default useJwtVerification;
