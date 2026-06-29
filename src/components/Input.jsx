export default function Input({ label, type, errorMessage, id, error, ...props }) {
  return(
    <>
      <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
       id={id}
       type={type}
       {...props}
       />
      <div className="control-error">{error && <p>{errorMessage}</p>}</div>
     </div>
    </>
  )
}
