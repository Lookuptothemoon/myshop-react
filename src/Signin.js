import React from 'react';
import {Link} from 'react-router-dom';
import './Signin.css';

function Signin() {
    let user = null;

    return (
        <div className="signin">
            <div className="siginin-container">
                <Link className="signin-logo" to="/"> <h1>MyShop</h1> </Link>

                <form className="signin-form">
                    <h2>Welcome Back</h2>
                    <h5 className="signin-form-email">E-mail: </h5>
                    <input type="email" />

                    <h5 className="signin-form-password">Password: </h5>
                    <input type="password" />

                    <button className="signin-form-submit" type="submit">Sign In</button>
                </form>

                <div className="siginin-signup">New to MyShop? <Link to="/signin">Sign Up</Link> </div>
            </div>
        </div>
    );
}

export default Signin;



/*
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img 
          className="login-logo"
          src={logo}
          alt="black amazon logo"
        />
      </Link>

      <div className="login-container">
        <h1 className="login-title">Sign in</h1>
        <form className="login-form">
          <h5 className="login-form-input">E-mail: </h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />

          <h5 className="login-form-input">Password: </h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />

          <button onClick={login} className="login-sign-in" type="submit">Sign In</button>

          <p className="login-form-disclaimer">
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>

          <button onClick={signUp} className="login-sign-up">Create your Amazon account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
*/
