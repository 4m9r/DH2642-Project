function ListCollectionView(props) {


    return (

        <div>

            <div class="profile-card">
                <span> <img src={props.profilePic} class="profile-pic-circle" /> </span>

                <p>
                    <b><h2 style="padding: 5px;">{props.username}</h2></b>
                    <br />
                    <div class="profile-description">Welcome to my profile, check out the movies I like!</div>
                </p>
                <br />
                <div>
                    <span>
                        <img src="https://www.freeiconspng.com/uploads/score-icon-8.png" height={20} style="padding-top: 5px;" />
                        <span class="score-card">Score: {props.score}</span>
                    </span>
                </div>
            </div>


            <span class="profile-card" style="display: inline-block;">
                <p> My Favourites: </p>
                    <ul>
                         {/* {props.favourites.map(f => <li>{f.titlename}</li>)} */}
                    </ul>

            </span>


        </div>



    )

}