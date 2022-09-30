import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData,setSubmittedData]=useState([])

  //State for holding error messages


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

function handleSubmit(event){
  event.preventDefault();
  if(firstName.length > 0 ){
  const formData={
    firstName:firstName,
    lastName:lastName
  };
  const dataArray= [...submittedData,formData]      
  setSubmittedData(dataArray);
  setFirstName('');
  setLastName('');

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

    
  
    <h3>Submission</h3>
    {listOfDataSubmitted}
    </div>
  );

}
export default Form;
