function ListCollectionView(props) {


    return (

        <div>

            <div class="card-container">
                <span> <img src={props.profilePic} class="profile-pic-circle" /> </span>

                <p>
                    <b><h2 stlye="padding: 5px;">{props.username}</h2></b>
                    <br />
                    <div class="profile-description">Welcome to my profile, check out the movies I like!</div>
                </p>
                <br />
                <div>
                    <button class="footer-button">
                        <img src="https://cdn-icons-png.flaticon.com/512/61/61342.png" height={25} style="padding-top: 5px;" />
                        <p>Films</p>
                    </button>
                    <button class="footer-button">
                        <img src="https://www.pngall.com/wp-content/uploads/4/Heart-Symbol-Transparent.png" height={25} style="padding-top: 5px;" />
                        <p>Lists</p>
                    </button>
                    <button class="footer-button">
                        <img src="https://www.freeiconspng.com/uploads/score-icon-8.png" height={25} style="padding-top: 5px;" />
                        <p>Score</p>
                    </button>
                </div>
            </div>


            <div class="card-container" stlye="display: inline-block;">
                <p> All the films watched: </p>
                
            </div>


        </div>



    )

}