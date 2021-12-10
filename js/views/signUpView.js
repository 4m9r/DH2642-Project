
function SignUpView(props){

    return(
      <html>
  
      <head>
  
        <title>
          Sign up
        </title>
  
      </head>
  
      <body>
  
        <h1><input type="text" id="email" placeholder="Email address"/></h1>
        {/* <h1><input type="text" id="emailconfirm" placeholder="Confirm Email address"/></h1> */}
        <h1><input type="password" id="password" placeholder="Password"/></h1>
        {/* <h1><input type="password" id="passwordconfirm" placeholder="Confirm Password"/></h1> */}
        <h1><input type="text" id="username" placeholder="Create a Username"/></h1>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <div> &nbsp; </div>
        <button onclick={()=>signUp()} > Sign Up </button>
        
      </body>
  
      </html>
  )
  
    
  }

//   import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
