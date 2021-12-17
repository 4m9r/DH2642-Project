function ListCollectionView(props) {

    function listing(){
    if (!props.favourites) { return <p>Oops, looks like there is nothing here!</p>} else {
        return <p> {props.favourites.map(f => <p><img src={f.image} height={40}/>{f.title}</p>)} </p>
    }}



    return (

        <div>

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


i

            <span class="profile-card" style="display: inline-block;">
                <p> My Favourites: </p>
                    
                         {listing()}
                    
            </span>


        </div>



    )

}