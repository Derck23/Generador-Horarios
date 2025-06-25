import React from 'react';
import './Login.css';
import LoginForm from '../../Components/LoginForm/LoginForm';
import calendarImg from '../../assets/calendar.png'; // tu ilustración

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <LoginForm />
        </div>
        <div className="login-right">
          <img src={calendarImg} alt="Calendario" />
        </div>
      </div>
    </div>
  );
};

export default Login;
