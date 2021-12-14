function DetailsView(props) {
    return (
        <div class="detparent">
            <div class="detmoviecard">
                <div class="detinfosection">
                    <div class="detailsbutton">
                        <button class="listBut"
                        /*onClick={}
                        disabled={}*/
                        >
                            Add to my Favorites Movies!
                        </button>

                        <button class="similarBut" onClick={() => window.location.hash = "#rec"}>
                            Find Similar Movies!
                        </button>
                        <button class="quizBut" onClick={() => window.location.hash = "#quiz"}>
                            Take a quiz
                        </button>
                    </div>
                    <div class="detmovieheader">
                        <img class="detimg" src={props.data.image || ""} />
                        <h1>{props.data.title || "no information"}</h1>
                        <h4>Year: {props.data.year || "no information"}, Director: {props.data.directors || "no information"}</h4>
                        <span class="detminutes">{props.data.runtimeStr || "no information"}</span>
                        <p class="detgenre">Genre: {props.data.genres || "no information"}</p>
                        <div class="detmoviedesc">
                            <p class="dettext">
                                Plot: {props.data.plot || "no information"}
                            </p>
                        </div>
                    </div>

                    <div class="detmovieheader">
                        <img class="detimg" src={props.data.image || ""} />
                        <h1>{props.data.title || "no information"}</h1>
                        <h4>Year: {props.data.year || "no information"}, Director: {props.data.directors || "no information"}</h4>
                        <span class="detminutes">{props.data.runtimeStr || "no information"}</span>
                        <p class="detgenre">Genre: {props.data.genres || "no information"}</p>
                        <div class="detmoviedesc">
                            <p class="dettext">
                                Plot: {props.data.plot || "no information"}
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