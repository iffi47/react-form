import { isEmail, isNotEmpty, isEqualsToOtherValue, hasMinLength } from "../util/validation";
import { useActionState } from "react";

export default function Signup() {
  function submitAction(prevFormState, formData) {
    const email=formData.get('email');
    const password=formData.get('password');
    const confirmPassword=formData.get('confirm-password');
    const firstName=formData.get('first-name');
    const lastName=formData.get('last-name');
    const role=formData.get('role');
    const terms=formData.get('terms');
    const acquisitionChannel = formData.getAll('acquisition');
    let errors=[];
    if(!isEmail(email)){
      errors.push("Invalid email address" )
    }
    if(!isNotEmpty(password) || !hasMinLength(password,9)){
      errors.push("You must provide the strong password");
    } if(!isEqualsToOtherValue(password, confirmPassword)){
      errors.push("Passwords must match");
    } if(!isNotEmpty(firstName) || !isNotEmpty(lastName)){
      errors.push("Please provide both names!");
    }if(!isNotEmpty(role)){
      errors.push("Please select a role!")
    }if(!terms){
      errors.push("You must aggree the Terms&Conditions of the company!")
    }if(acquisitionChannel.length === 0){
      errors.push("PLease select atleast one channel!");
    } if(errors.length>0){
      return {errors}
    }
    return {errors:null}
  }

  const [formState, formAction, pending]=useActionState(submitAction,{errors:null});
  return (
   <form action={formAction}>
    <h2>Welcome on board!</h2>
    <p>We just need a little bit of data from you to get you started 🚀</p>

    <div className="control">
     <label htmlFor="email">Email</label>
     <input
      id="email"
      type="email"
      name="email"
      required
     />
    </div>

    <div className="control-row">
     <div className="control">
      <label htmlFor="password">Password</label>
      <input
       id="password"
       type="password"
       name="password"
       required
       minLength={9}
      />
     </div>

     <div className="control">
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
       id="confirm-password"
       type="password"
       name="confirm-password"
       required
      />
     </div>
     {/* <div className="control-error">{passwordsAreNotEqual && <p>Passwords must match</p>}</div> */}
    </div>

    <hr />

    <div className="control-row">
     <div className="control">
      <label htmlFor="first-name">First Name</label>
      <input
       type="text"
       id="first-name"
       name="first-name"
       required
      />
     </div>

     <div className="control">
      <label htmlFor="last-name">Last Name</label>
      <input
       type="text"
       id="last-name"
       name="last-name"
       required
      />
     </div>
    </div>

    <div className="control">
     <label htmlFor="phone">What best describes your role?</label>
     <select
      id="role"
      name="role"
      required
      >
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
      <option value="employee">Employee</option>
      <option value="founder">Founder</option>
      <option value="other">Other</option>
     </select>
    </div>

    <fieldset>
     <legend>How did you find us?</legend>
     <div className="control">
      <input
       type="checkbox"
       id="google"
       name="acquisition"
       value="google"
      />
      <label htmlFor="google">Google</label>
     </div>

     <div className="control">
      <input
       type="checkbox"
       id="friend"
       name="acquisition"
       value="friend"
      />
      <label htmlFor="friend">Referred by friend</label>
     </div>

     <div className="control">
      <input
       type="checkbox"
       id="other"
       name="acquisition"
       value="other"
      />
      <label htmlFor="other">Other</label>
     </div>
    </fieldset>

    <div className="control">
     <label htmlFor="terms-and-conditions">
      <input
       type="checkbox"
       id="terms-and-conditions"
       name="terms"
      />
      I agree to the terms and conditions
     </label>
    </div>

    {formState.errors && (
     <ul className="errors">
      {formState.errors.map((error) => (
       <li key={error}>{error}</li>
      ))}
     </ul>
    )}

    <p className="form-actions">
     <button
      type="reset"
      className="button button-flat">
      Reset
     </button>
     <button
      type="submit"
      className="button"
      disabled={pending}>
      {pending ? "Submitting..." : "Sign up"}
     </button>
    </p>
   </form>
  );
}
