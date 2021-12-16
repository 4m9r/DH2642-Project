function MenuView(props) {

  return (
    <div class="menudrop">
      <button class="menubutton">Menu</button>
      <div class="menucontent">
        <a onClick={() => window.alert("To be implemented")
        }>Profile</a>
        <a href="#leaderboard">Leaderboard</a>
        <a href="#search">Search for a movie</a>
        <a onClick={() => signOut()} href="#login">Log Out</a>
      </div>
    </div>
  )


}

// if user is logged in => Log Out option
// if nobody is logged in => Log In option



{/* <div class="menudrop">
<button class="menubutton">Menu</button>
<div class="menucontent">
  <a href="#list">My list</a>
  <a href="#search">Search for a movie</a>
  <a href="#recommend">Recommend me a movie</a>
  <a href="#quiz">Take a quiz</a>
</div>
</div> */}
