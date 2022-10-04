import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData,setSubmittedData]=useState([])

  //State for holding error messages
  const [errors,setError]=useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

function handleSubmit(event){
  event.preventDefault();
  if(firstName.length > 0 && lastName.length>0){
  const formData={
    firstName:firstName,
    lastName:lastName,
  };
  const dataArray= [...submittedData,formData]      
  setSubmittedData(dataArray);
  setFirstName('');
  setLastName('');
  setError([])

}else{

  setError(["Ensure FIRST NAME and LAST NAME are filled"]);
}

}


const listOfDataSubmitted=submittedData.map((data,index)=>{
  return (<div key={index}>
{data.firstName} {data.lastName}
  </div>
  )

});

  return (

    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName}/>
      <input type="text" onChange={handleLastNameChange} value={lastName} />
   <button type="submit">Submit</button>
    </form>
    {/* conditionally render error message */}
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    
  
    <h3>Submission</h3>
    {listOfDataSubmitted}
    </div>
  );

}
export default Form;
