function ListPresenter(props) {
    
    return (
        <div>
            <ListCollectionView
                username={props.model.currentFriend.username}
                profilePic={props.model.currentFriend.profilePic}
                score={props.model.currentFriend.totalScore}
            />
        </div>
    )
    

}