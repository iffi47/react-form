import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
 const {
  value: emailValue,
  handleInputBlur: handleEmailBlur,
  handleInputChange: handleEmailChange,
  hasError: emailIsInvalid
 } = useInput("", (value) => {
  return isEmail(value) && isNotEmpty(value);
 });
 const {
  value: passwordValue,
  handleInputBlur: handlePasswordBlur,
  handleInputChange: handlePasswordChange,
  hasError: passwordIsInvalid
 } = useInput("", (value) => {
  return hasMinLength(value,9);
 });
//  const emailIsInvalid =
//   didBlur.email &&
//   (!isEmail(emailValue) || !isNotEmpty(emailValue));
//  const passwordIsInvalid =
//   didBlur.password &&
//   (!hasMinLength(enteredValue.password, 9) ||
//    !isNotEmpty(enteredValue.password));
 function handleLogin(event) {
  event.preventDefault();
  console.log("submit");
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
     onBlur={handleEmailBlur}
     onChange={handleEmailChange}
     value={emailValue}
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
      value={emailValue}
     />
     <div className="control-error">
      {emailIsInvalid && <p>Enter the right Email</p>}
     </div>
    </div> */}
    <Input
     label="Password"
     id="password"
     type="password"
     onBlur={handlePasswordBlur}
     name="password"
     onChange={handlePasswordChange}
     value={passwordValue}
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
