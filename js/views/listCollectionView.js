function ListCollectionView(props) {


    return (


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
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" height={25} style="padding-top: 5px;" />
                    <p>Friends</p>
                </button>
            </div>


            {/* // <div >
        //     {props.lists.map(x =>
        //         <div class="listbox">
        //             <span>
        //                 <p style="margin-bottom: 10px;"><b>{x.listname}</b></p>
        //                 {/* {x.map(movie => 
        //                     <p> {movie} </p>
        //                     )} */}
            {/* //             </span> */}

        </div>
        //     )}

        // </div> */}


    )

}