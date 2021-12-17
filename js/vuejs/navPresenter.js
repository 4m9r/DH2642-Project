function NavPresenter(props){
    return(
        <div class="navbar">
                        <span class="siteName">
                             <img class="icon" src="https://www.freeiconspng.com/uploads/film-media-movie-scene-start-tv-video-icon--1.png" onClick={()=> window.location.hash = "#search"}/> 
                             <span class="logo" onClick={()=> window.location.hash = "#search"}>FilmBuff</span>
                        </span>
                        
                        <span > <MenuView /></span>
                    </div>
    );
}