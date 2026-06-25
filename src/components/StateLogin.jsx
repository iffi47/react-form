import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: ""
  });
  const [didBlur, setDidBlur] = useState({
    email: false,
    password: false
  });
  function handleLogin(event) {
    event.preventDefault();
    console.log("submit");
  };
  let emailIsInvalid = didBlur.email && !enteredValue.email.includes("@");
  let passwordIsInvalid = didBlur.password && enteredValue.password.length<9;
  function handleInputChange(identifier, value){
    setEnteredValue((previousValue) =>({
      ...previousValue,
      [identifier]: value
    }))
  };
  function handleInputBlur(identifier) {
    setDidBlur((prevState) =>({
      ...prevState,
      [identifier] : true
    }))
  }
  return (
   <form onSubmit={handleLogin}>
    <h2>Login</h2>

    <div className="control-row">
     <div className="control no-margin">
      <label htmlFor="email">Email</label>
      <input
       id="email"
       type="email"
       name="email"
       onBlur={()=> handleInputBlur('email')}
       onChange={(event) => handleInputChange('email', event.target.value)}
       value={enteredValue.email}
       />
      <div className="control-error">{emailIsInvalid && <p>Enter the right Email</p>}</div>
     </div>

     <div className="control no-margin">
      <label htmlFor="password">Password</label>
      <input
       id="password"
       type="password"
       onBlur={() =>handleInputBlur('password')}
       name="password"
       onChange={(event) => handleInputChange('password', event.target.value)}
       value={enteredValue.password}
      />
      <div className="control-error">{passwordIsInvalid && <p>Enter strong password!</p>}</div>
     </div>
    </div>

    <p className="form-actions">
     <button className="button button-flat">Reset</button>
     <button
      className="button">
      Login
     </button>
    </p>
   </form>
  );
}
