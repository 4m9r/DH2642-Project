
function SignUpView(props) {

  return (
    <div class="authbox2">

      <div>
        <h2 class="titletext">
          CREATE YOUR ACCOUNT
        </h2>
      </div>

      <h1><input class="inputbox" type="text" id="email" placeholder="Email address" /></h1>
      {/* <h1><input type="text" id="emailconfirm" placeholder="Confirm Email address"/></h1> */}
      <h1><input class="inputbox" type="password" id="password" placeholder="Password" /></h1>
      {/* <h1><input type="password" id="passwordconfirm" placeholder="Confirm Password"/></h1> */}
      <h1><input class="inputbox" type="text" id="username" placeholder="Create a Username" /></h1>

      <div>&nbsp;</div>

      <div class="authbuttonstyle">
        <button class="authbutton" onclick={() => signUp(props.model)} > Sign Up </button>
      </div>
      <a class="funtext" href="#login">Already have an account?</a>
    </div>


  )


}

