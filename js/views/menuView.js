function MenuView(props) {

  return (
    <div class="menudrop">
      <button class="menubutton">Menu</button>
      <div class="menucontent">
        <a onClick={() => window.alert("To be implemented")
        }>My list</a>
        <a href="#search">Search for a movie</a>
        <a onClick={() => window.alert("To be implemented")}>Recommend me a movie</a>
        <a onClick={() => window.alert("To be implemented")}>Take a quiz</a>
      </div>
    </div>
  )


}
{/* <div class="menudrop">
<button class="menubutton">Menu</button>
<div class="menucontent">
  <a href="#list">My list</a>
  <a href="#search">Search for a movie</a>
  <a href="#recommend">Recommend me a movie</a>
  <a href="#quiz">Take a quiz</a>
</div>
</div> */}