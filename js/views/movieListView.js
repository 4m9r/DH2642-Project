function MovieListView(props) {
    return (
        <div>
        /*for each item (movie), display the title and the image poster of the movie. span for each, display inline block */
            // title of list, by user, desription of list 
            <h1> {props.users.user.lists.list.titleoflist}</h1>
            <h6> by {props.users.user}</h6> 
            <p> {props.users.user.lists.list.description} </p>
            {props.users.user.lists.list.map(x =>
                <div key={x.id}>
                    <div class="box">
                        // display: inline-block
                        <span>
                            // img and title of movie in the same line?
                            <img src={x.image} height={100} width={100} />
                            <h4>{x.moviename}</h4>
                            // underneath img and title - user's rating? (suggestion)
                            <h6>{x.usersrating}</h6>

                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}


// can we switch between grid view and list view?? hmmmm