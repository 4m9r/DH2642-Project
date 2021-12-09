function DetailsView(props) {
    return (
        <div class="detparent">
            <div class="detmoviecard">
                <div class="detinfosection">
                    <div class="detailsbutton">
                        <button
                        /*onClick={}
                        disabled={}*/
                        >
                            Add to my Favorites Movies!
                        </button>

                        <button onClick={() => window.location.hash = "#rec"}>
                            Find Similar Movies!
                        </button>
                    </div>
                    <div class="detmovieheader">
                        <img class="detimg" src={props.data.image} />
                        <h1>{props.data.title}</h1>
                        <h4>Year: {props.data.year}   ,  Director: {props.data.directors}</h4>
                        <span class="detminutes">{props.data.runtimeStr}</span>
                        <p class="detgenre">Genre: {props.data.genres}</p>
                        <div class="detmoviedesc">
                            <p class="dettext">
                                Plot: {props.data.plot}
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