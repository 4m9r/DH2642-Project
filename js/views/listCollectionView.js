function ListCollectionView(props) {
    return (
        <div>
            /* for each list that the user has, create a span for a list showing what contents each list has. */
            <h1>{props.users.user}'s Lists</h1>
            {props.users.user.lists.map(x =>
                <div key={x.id}>
                    <div class="box">
                        // display: inline-block
                        <span>
                            // img and title of list in the same line?
                            <img src={x.image} height={100} width={100} />
                            <h4>{x.listname}</h4>
                            // should map 3 movies max from the list then "..." (suggestion)
                            {x.list.moviename1}
                            {x.list.moviename2}
                            {x.list.moviename3}
                            {"..."}                            
                        </span>
                    </div>
                </div>
            )}
        </div>

    )
}