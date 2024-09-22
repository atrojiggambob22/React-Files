// Import the React library and the useState hook from React
import React from 'react';
import { useState } from 'react';

// Define a function that simulates a network request
// It takes an answer parameter and returns a Promise that resolves or rejects after a 1.5-second delay
function submitForm(answer) {
  // Return a new Promise that will resolve or reject after a delay
  return new Promise((resolve, reject) => {
    // Use setTimeout to simulate a network delay
    setTimeout(() => {
      // Check if the answer is correct (in this case, "lima" in lowercase)
      let shouldError = answer.toLowerCase() !== 'lima';
      // If the answer is incorrect, reject the Promise with an error message
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }
      // If the answer is correct, resolve the Promise
      else {
        resolve();
      }
    }, 1500); // 1.5-second delay
  });
}

// Define the InputState component
const InputState = () => {
  // Use the useState hook to create three state variables: answer, error, and status
  // Initialize answer with an empty string, error with null, and status with "typing"
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  // If the status is "success", render a success message
  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  // Define an async function to handle form submission
  async function handleSubmit(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Set the status to "submitting" to indicate that the form is being processed
    setStatus('submitting');

    try {
      // Call the submitForm function with the current answer
      await submitForm(answer);
      // If the Promise resolves, set the status to "success"
      setStatus('success');
    } catch (err) {
      // If the Promise rejects, set the status to "typing" and update the error state
      setStatus('typing');
      setError(err);
    }
  }

  // Define a function to handle changes to the textarea
  function handleTextareaChange(e) {
    // Update the answer state with the current value of the textarea
    setAnswer(e.target.value);
  }

  // Render the component
  return (
    <>
      <h2>City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          // Bind the answer state to the textarea value
          value={answer}
          // Call handleTextareaChange when the user types in the textarea
          onChange={handleTextareaChange}
          // Disable the textarea if the status is "submitting"
          disabled={status === 'submitting'}
        />
        <br />
        <button
          // Disable the button if the answer is empty or the status is "submitting"
          disabled={answer.length === 0 || status === 'submitting'}
        >
          Submit
        </button>
        {error !== null && (
          // If there's an error, render a paragraph with the error message
          <p className="Error">{error.message}</p>
        )}
      </form>
    </>
  );
};

// Export the InputState component
export default InputState;