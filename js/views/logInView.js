function LogInView(props){

  return(
    <div>
    

      <h1><input type="text" id="username" placeholder="Username or Email address"/></h1>
      <h1><input type="password" id="password" placeholder="Password"/></h1>
      <button> Log in! </button>

      <span> No account ? </span> <span> &nbsp; </span> <button onClick={SignUpView}> Sign up! </button>

    

    </div>
)

  
}
