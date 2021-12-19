function ListPresenter(props) {

    
    return(
        <div>
            <ProfileView
                username={props.model.currentFriend.username}
                profilePic={props.model.currentFriend.profilePic}
                description = {props.model.currentFriend.profileDescription}
                score={props.model.currentFriend.totalScore}
                favourites = {props.model.currentFriend.favourites}
                movieChosen={id => props.model.setCurrentMovie(id)}

            />
        </div>
    )
    

}