function DetailsView(props) {
    return (
        <div class="detparent">
            <div class="detmoviecard">
                <div class="detinfosection">
                    <div class="detailsbutton">
                        <button
                        /*onClick={props.dishAdded}
                        disabled={props.isDishInMenu}*/
                        >
                            Add to my Favorites Movies!
                        </button>

                        <button /*onClick={() => window.location.hash = "#search"}*/>
                            Find Similar Movies!
                        </button>
                    </div>
                    <div class="detmovieheader">
                        <img class="detimg" src={props.data.image} />
                        <h1>{props.data.title}</h1>
                        <h4>year: {props.data.year}, Director: {props.data.directors}</h4>
                        <span class="detminutes">{props.data.runtimeStr}</span>
                        <p class="detgenre">Genre: {props.data.genres}</p>
                        <div class="detmoviedesc">
                            <p class="dettext">
                                plot: {props.data.plot}
                            </p>
                        </div>
                    </div>


                </div>
                <div class="detblurback">
                    <img class="blurImg" src={props.data.image} />
                </div>
            </div>


        </div>
    );
}