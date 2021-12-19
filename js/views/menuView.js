function MenuView() {

  return (
    <div class="menudrop">
      <button class="menubutton">Menu</button>
      <div class="menucontent">
        <a href="#profile">Profile</a>
        <a href="#leaderboard">Leaderboard</a>
        <a href="#search">Search for a movie</a>
        <a onClick={() => signOut()} href="#login">Log Out</a>
      </div>
    </div>
  )


}

