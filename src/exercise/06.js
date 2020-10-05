// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  const usernameRef = React.useRef('');
  const [username, setUsername] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  function handleSubmit(event){ 
    event.preventDefault();
    // console.log(event);
    // onSubmitUsername(document.getElementById('username-input').value);
    onSubmitUsername(usernameRef.current.value);

  }
  function handleChange(event) {
    const inputValue = usernameRef.current.value;
    const inputValueLength = inputValue.length;
    const lastTyped = inputValueLength > -1 ? inputValue.slice(inputValueLength-1) : '';

    console.log(inputValue.charAt(inputValue.length), lastTyped)
    if(lastTyped !== '' && lastTyped === lastTyped.toUpperCase()){
      setErrorMessage(`Can't have capitals - you typed ${lastTyped}`);
      // setUsername(inputValue);
    }
    else{
      setErrorMessage('');
      setUsername(inputValue);
    }
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">Username:</label>
        <input id="username-input" value={username} ref={usernameRef} type="text" onChange={handleChange} />
      </div>
      <button disabled={!username || errorMessage ? true : false} type="submit">Submit</button>
      {/* {!username && errorMessage ? 'true' : 'false'}  */}
      {username && 
        <p>Your username will be {username}</p>
      }
      {errorMessage && 
        <p>{errorMessage}</p>
      }
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
