function LogInView(props) {

  return (
    <div class="authbox2">

    <div>
        <h2 class="titletext2">
          LOG IN
        </h2>
    </div>
      <h1><input class="inputbox" type="text" id="emaillog" placeholder="Email address" /></h1>
      <h1><input class="inputbox" type="password" id="passwordlog" placeholder="Password" /></h1>
      <div> &nbsp; </div>
      <div class="authbuttonstyle">
      <button class="authbutton" onclick={() => logIn()}> Log in </button>
      
      <div>
      <div> &nbsp; </div>
      <span class="funtext"> No account ? </span> <div> &nbsp; </div> <button class="authbutton" onClick={() => window.location.hash = "#signup"}> Sign up </button>
      </div>
      </div>


    </div>
  )


}
