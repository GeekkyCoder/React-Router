import React, { useState } from "react";

import { createAuthUserWithEmailAndPassword,auth,createUserDocumentFromAuth } from "../utils/firebase/utils";


const formFieldsObject = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(formFieldsObject);
  const [isPasswordMatched, setIsPasswordMatched] = useState();
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFormFields) => {
      return {
        ...prevFormFields,
        [name]: value,
      };
    });
  };

  const validatePassword = (password, confirmPassword) => {
    return password === confirmPassword ? true : false;
  };

  console.log(formFields);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const isPasswordValid = validatePassword(password, confirmPassword);
    
    if(isPasswordValid === false) return 
    
    try{
     const {user} = await createAuthUserWithEmailAndPassword(email,password)
     await createUserDocumentFromAuth(user, {displayName})

    }catch(err){
        console.log(err.message)
    }
    
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form">
        <div className="form-item">
          <label>DisplayName:</label>
          <input
            type="text"
            placeholder="enter your name"
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label>Email:</label>
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label>Confirm Password:</label>
          <input
            type="text"
            placeholder="confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
