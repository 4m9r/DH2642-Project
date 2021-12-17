function ProfilePresenter(props) {


    return (
        <div>
            <ProfileView

                username={props.model.username}
                profilePic={props.model.profilePic}
                description={props.model.profileDescription}
                score={props.model.totalScore}
                favourites={props.model.favourites}
                movieChosen={id => props.model.setCurrentMovie(id)}


            />
        </div>
    );
}