export function useInput(defaultValue, validationFn) {
   const [enteredValue, setEnteredValue] = useState(defaultValue);
   const [didBlur, setDidBlur] = useState(false);
    const valueIsValid=validationFn(enteredValue);
    function handleInputChange(event) {
     setEnteredValue(event.target.value);
     setDidBlur(false);
    }
    function handleInputBlur() {
     setDidBlur(true);
    }
    return {
      value: enteredValue,
      handleInputBlur,
      handleInputChange,
      hasError: didBlur && !valueIsValid
    }
} 