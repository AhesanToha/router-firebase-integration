import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <form>
        <input type="email" name="" id="#1" placeholder="Your Email" />
        <br />
        <input type="password" name="" placeholder="Your Password" id="#2" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
