function ListPresenter(props) {

    
console.log(MovieSource.getTopMovies());
    
    return (
        <div>
            <ListCollectionView
                username={props.model.currentFriend.username}
                profilePic={props.model.currentFriend.profilepic}
                lists={props.model.friendData}
                topMovies = {MovieSource.getTopMovies()}
            />
        </div>
    )
    

}