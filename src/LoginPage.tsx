import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase.config';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const signIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("Sign-in successful:", result.user);
        navigate('/'); // Redirect after successful sign-in
      } catch (error) {
        console.error("Authentication error:", error);
      }
    };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
