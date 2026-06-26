import { useState, useRef } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleInputChange(event){
    event.preventDefault();
    let enteredEmail =emailRef.current.value;
    let enteredPassword = passwordRef.current.value;
    const emailIsValid = enteredEmail.includes("@");
    console.log(enteredEmail, enteredPassword);
    if(!emailIsValid){
      setEmailIsInvalid(true);
      return;
    }
  }
  return (
   <form onSubmit={handleInputChange}>
    <h2>Login</h2>

    <div className="control-row">
     <div className="control no-margin">
      <label htmlFor="email">Email</label>
      <input
       id="email"
       type="email"
       name="email"
       ref={emailRef}
       />
       <div className="control-error">{emailIsInvalid && <p>Enter the right Email</p>}</div>
     </div>

     <div className="control no-margin">
      <label htmlFor="password">Password</label>
      <input
       id="password"
       type="password"
       name="password"
       ref={passwordRef}
      />
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
