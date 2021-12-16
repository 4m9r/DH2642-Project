function UserListPresenter(props) {

    return (
        <div>
            <UserListView
                username={props.model.username}
                userFriends={props.model.friendsList}
                setCurrentFriendView = {e=> props.model.setCurrentFriend(e)}
                 />
                 
        </div>
    )

}