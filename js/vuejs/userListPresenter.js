function UserListPresenter(props) {

    return (
        <div>
            <UserListView
                username={props.model.username}
                users={props.model.users}
                // setCurrentFriendView = {e=> props.model.setCurrentFriend(e)}
                 />
                 
        </div>
    )

}