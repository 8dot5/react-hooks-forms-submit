import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]) //initial render is of a new array
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = {
  //     firstName: firstName,
  //     lastName: lastName
  //   };

  //   const dataArray = [...submittedData, formData];
  //   setSubmittedData(dataArray);
  //   setFirstName("");
  //   setLastName("");

  // }

  //validation logic in the handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    // first name is required
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }


  //maps out inputted names..and is rendered to the page
  //question, not supposed to use index?
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
       {/* conditionally render error messages */}
        {errors.length > 0
          ? errors.map((error, index) => (
              <p key={index} style={{ color: "red" }}>
                {error}
              </p>
            ))
          : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
