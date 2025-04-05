import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleAuth = () => {
  const [user, setUser ] = useState(null);

  const handleLogin = () => {
    const redirectUri = `${process.env.REACT_APP_BASE_URL}/api/auth/google/callback`;
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    const responseType = 'code';
    const accessType = 'offline';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`;

    window.location.href = authUrl; // Redirect to Google login
  };

  useEffect(() => {
    const fetchUser Data = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const error = params.get('error');

      if (error) {
        console.error('Error during Google login:', error);
        return;
      }

      if (code) {
        try {
          const response = await axios.get(`/api/auth/google/callback?code=${code}`);
          setUser (response.data.data); // Set user data
        } catch (err) {
          console.error('Error fetching user data:', err);
        }
      }
    };
    fetchUser Data();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <div>
          <h1>Welcome, {user.first_name} {user.last_name}</h1>
          <img src={user.profilepictureurl} alt={user.first_name} />
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div>
          <h1>Login with Google</h1>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default GoogleAuth;