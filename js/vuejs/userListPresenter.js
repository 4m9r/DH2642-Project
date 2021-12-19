function UserListPresenter(props) {

    return (
        <div>
            <UserListView
                username={props.model.username}
                userID={props.model.userID}
                users={props.model.users}
                profilePic={props.model.profilePic}
                setCurrentFriendView={e => props.model.setCurrentFriend(e)}
            />

        </div>
    )

}