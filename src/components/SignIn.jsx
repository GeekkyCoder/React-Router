import React, { useState,useContext } from "react";

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../utils/firebase/utils";

import { Context } from "./Context/Context";

const formFieldsObject = {
  email: "",
  password: "",
};

function SignIn() {
    const {setCurrentUser} = useContext(Context)
  const [formFields, setFormFields] = useState(formFieldsObject);
  const [isPasswordMatched, setIsPasswordMatched] = useState();
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFormFields) => {
      return {
        ...prevFormFields,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user)
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;

        case "auth/user-not-found":
          alert("no such user exists");
          break;

        default:
          console.log(err.message);
      }
    }
  };

  const logUserWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form">
        <span style={{ textTransform: "uppercase" }}>
          Already have an account ?
        </span>
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

        <button type="submit">Sign in</button>
        <button type="button" style={{ marginTop: "2em" }} onClick={logUserWithGoogle}>
          Google Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
