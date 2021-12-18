function NavPresenter(props) {
    return (
        <div class="navbar">
            <span class="siteName" onClick={() => window.location.hash = "#search"}>
                <img class="icon" src="https://www.freeiconspng.com/uploads/film-media-movie-scene-start-tv-video-icon--1.png" />
                <span class="logo">FilmBuff</span>
            </span>

            <span > <MenuView /></span>
        </div>
    );
}