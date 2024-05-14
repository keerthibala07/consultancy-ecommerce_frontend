// import React, { useState } from "react";
// import "./CSS/LoginSignup.css";

// const LoginSignup = () => {

//   const [state,setState] = useState("Login");
//   const [formData,setFormData] = useState({username:"",email:"",password:""});

//   const changeHandler = (e) => {
//     setFormData({...formData,[e.target.name]:e.target.value});
//     }

//   const login = async () => {
//     let dataObj;
//     await fetch('http://localhost:4000/login', {
//       method: 'POST',
//       headers: {
//         Accept:'application/form-data',
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {dataObj=data});
//       console.log(dataObj);
//       if (dataObj.success) {
//         localStorage.setItem('auth-token',dataObj.token);
//         window.location.replace("/");
//       }
//       else
//       {
//         alert(dataObj.errors)
//       }
//   }

//   const signup = async () => {
//     let dataObj;
//     await fetch('http://localhost:4000/signup', {
//       method: 'POST',
//       headers: {
//         Accept:'application/form-data',
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {dataObj=data});

//       if (dataObj.success) {
//         localStorage.setItem('auth-token',dataObj.token);
//         window.location.replace("/");
//       }
//       else
//       {
//         alert(dataObj.errors)
//       }
//   }

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state==="Sign Up"?<input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
//           <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler}/>
//           <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
//         </div>

//         <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

//         {state==="Login"?
//         <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
//         :<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>}

//         <div className="loginsignup-agree">
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({ username: "", email: "", password: "" });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear the error message when the user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  }

  const login = async () => {
    // Check if email and password are provided
    if (!formData.email) {
      setErrors({ ...errors, email: "Email is required." });
      return;
    }

    if (!formData.password) {
      setErrors({ ...errors, password: "Password is required." });
      return;
    }

    let dataObj;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => { dataObj = data; });
    
    console.log(dataObj);
    if (dataObj.success) {
      localStorage.setItem('auth-token', dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  }

  const signup = async () => {
    // Check if username, email, and password are provided
    if (!formData.username) {
      setErrors({ ...errors, username: "Username is required." });
      return;
    }

    if (!formData.email) {
      setErrors({ ...errors, email: "Email is required." });
      return;
    }

    if (!formData.password) {
      setErrors({ ...errors, password: "Password is required." });
      return;
    }

    let dataObj;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => { dataObj = data; });

    if (dataObj.success) {
      localStorage.setItem('auth-token', dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? 
            <div className="field-container">
              <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler} />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
          : <></>}
          <div className="field-container">
            <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="field-container">
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>

        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>

        {state === "Login" ?
          <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>
          : <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
