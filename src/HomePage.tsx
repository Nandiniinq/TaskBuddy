import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './firebase.config';
import task2 from './components/task2.png';
import googleIcon from './components/google.png'; // Ensure this path is correct
import circle from './components/circle.png';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google Login Success:', result.user);
      navigate('/task-manager'); // Navigate to TaskManager page
    } catch (error) {
      console.error('Google Login Error:', error);
    }
  };

  return (
    <div 
      className="home-page" 
      style={{
        backgroundImage: `url(${circle})`,
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center',
        height: '100vh', // Full height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff' // Optional: change text color for better visibility
      }}
    >
      <div className="header-container" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={task2} 
          alt="Task Icon" 
        />
        <h1 className="taskbuddy" style={{ color: 'purple', margin: 0 }}>TaskBuddy</h1>
      </div>
      <p className="description" style={{ color: '#333' }}>
        Streamline your workflow and track progress effortlessly with our all-in-one task management app.
      </p>
      
      {/* Black box for Google login */}
      <div className="login-container" style={{ backgroundColor: 'black', padding: '10px', borderRadius: '20px', display: 'flex', alignItems: 'center' }}>
        <img src={googleIcon} alt="Google Icon" style={{ width: "35px", marginRight: "1px" }} />
        <button
          onClick={handleGoogleLogin}
          style={{
            padding: '10px 20px',
            fontSize: '20px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default HomePage;






