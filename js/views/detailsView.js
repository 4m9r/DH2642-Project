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
                        <img class="detimg" src={props.data.image || ""} />
                        <h1>{props.data.title || "no information"}</h1>
                        <h4>year: {props.data.year || "no information"}, Director: {props.data.directors || "no information"}</h4>
                        <span class="detminutes">{props.data.runtimeStr || "no information"}</span>
                        <p class="detgenre">Genre: {props.data.genres || "no information"}</p>
                        <div class="detmoviedesc">
                            <p class="dettext">
                                plot: {props.data.plot || "no information"}
                            </p>
                        </div>
                    </div>


                </div>
                <div class="detblurback">
                    <img class="blurImg" src={props.data.image || ""} />
                </div>
            </div>


        </div>
    );
}