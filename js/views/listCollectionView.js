function ListCollectionView(props) {

    function listing() {
        if (!props.favourites) { return <p>Oops, looks like there is nothing here!</p> } else {
            return <span class="profile-movie-list">
                {props.favourites.map(f => <span class="profile-movie">
                    <img src={f.image} height={100} />
                    <div>{f.title}</div>
                </span>)}
            </span>
        }
    }



    return (

        <div class="profile-div">

            <div class="profile-card">
                <span> <img src={props.profilePic} class="profile-pic-circle" /> </span>

                <p>
                    <b><h2 style="padding: 5px;">{props.username}</h2></b>
                    <br />
                    <div class="profile-description">Welcome to my page!</div>
                </p>
                <br />
                <div>
                    <span>
                        <img src="https://www.freeiconspng.com/uploads/score-icon-8.png" height={20} style="padding-top: 5px;" />
                        <span class="score-card">Score: {props.score}</span>
                    </span>
                </div>
            </div>




            <div class="list-card">
                <p> My favourite films: </p>

                {listing()}

            </div>


        </div>



    )

}