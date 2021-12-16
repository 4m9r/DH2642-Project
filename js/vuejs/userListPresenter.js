function UserListPresenter(props) {

    return (
        <div>
            <UserListView
                username={props.model.username}
                users={props.model.users}
                profilePic = {props.model.profilePic}
                setCurrentFriendView = {e=> props.model.setCurrentFriend(e)}
                 />
                 
        </div>
    )

}