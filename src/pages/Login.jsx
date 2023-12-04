import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../reducers/postSlice";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const isLoggedIn = useSelector((state) => state.posts.isLoggedIn);
  const dispatch = useDispatch();
//   const history = useHistory(); 
const navigate = useNavigate(); 
  const users = useSelector((state) => state.posts.usersList);

  const handleButton = () =>  {
    setIsError(false);
  }
  const handleYes = () => {
    dispatch(logOut());
  }

  const handleForm = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (users) {
      const user = users.find((user) => user.email === email && user.password === password);
      if (!user) {
        setIsError(true);
      } else {
        dispatch(logIn(user.userId));
        setIsError(false);
        setEmail("");
        setPassword("");
        console.log("successfull");
        // history.push("/");
        navigate("/");
      }
    }

    setError("");
  };

  if (isLoggedIn)
  return (

    <di> 
        <p> Are you sure you want to logout?</p>
        <button onClick={handleYes}>Yes</button>
    </di>
);

  return (
    isError ? (
      <div>
        <p>The user does not exist.</p>
        <button onClick={handleButton}>Try again</button>
      </div>
    ) : (
      <div>
        <form onSubmit={handleForm}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type="submit" value="Login" />
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    )
  );
};
