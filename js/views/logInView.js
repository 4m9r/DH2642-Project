function LogInView(props) {

  return (
    <div>


      <h1><input type="text" id="emaillog" placeholder="Email address" /></h1>
      <h1><input type="password" id="passwordlog" placeholder="Password" /></h1>
      <button onclick={() => logIn()}> Log in </button>

      <span> No account ? </span> <span> &nbsp; </span> <button onClick={() => window.location.hash = "#signup"}> Sign up! </button>



    </div>
  )


}
