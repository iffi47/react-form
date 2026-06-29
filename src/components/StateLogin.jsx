import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
 const [enteredValue, setEnteredValue] = useState({
  email: "",
  password: "",
 });
 const [didBlur, setDidBlur] = useState({
  email: false,
  password: false,
 });

 const emailIsInvalid =
  didBlur.email &&
  (!isEmail(enteredValue.email) || !isNotEmpty(enteredValue.email));
 const passwordIsInvalid =
  didBlur.password &&
  (!hasMinLength(enteredValue.password, 9) ||
   !isNotEmpty(enteredValue.password));
  function handleLogin(event) {
  event.preventDefault();
  console.log("submit");
 }
 function handleInputChange(identifier, value) {
  setEnteredValue((previousValue) => ({
   ...previousValue,
   [identifier]: value,
  }));
  setDidBlur((prevState) => ({
   ...prevState,
   [identifier]: false,
  }));
 }
 function handleInputBlur(identifier) {
  setDidBlur((prevState) => ({
   ...prevState,
   [identifier]: true,
  }));
 }
 
 return (
  <form onSubmit={handleLogin}>
   <h2>Login</h2>

   <div className="control-row">
    <Input
     label="Email"
     id="email"
     type="email"
     name="email"
     onBlur={() => handleInputBlur("email")}
     onChange={(event) => handleInputChange("email", event.target.value)}
     value={enteredValue.email}
     error={emailIsInvalid}
     errorMessage="Email is not valid"
    />
    {/* <div className="control no-margin">
     <label htmlFor="email">Email</label>
     <input
      id="email"
      type="email"
      name="email"
      onBlur={() => handleInputBlur("email")}
      onChange={(event) => handleInputChange("email", event.target.value)}
      value={enteredValue.email}
     />
     <div className="control-error">
      {emailIsInvalid && <p>Enter the right Email</p>}
     </div>
    </div> */}
    <Input
     label="Password"
     id="password"
     type="password"
     onBlur={() => handleInputBlur("password")}
     name="password"
     onChange={(event) => handleInputChange("password", event.target.value)}
     value={enteredValue.password}
     error={passwordIsInvalid}
     errorMessage="Password must be strong"
    />
   </div>

   <p className="form-actions">
    <button className="button button-flat">Reset</button>
    <button className="button">Login</button>
   </p>
  </form>
 );
}
