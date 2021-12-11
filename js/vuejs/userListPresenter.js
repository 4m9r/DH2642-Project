function UserListPresenter(props) {

    return (
        <div>
            <UserListView
                username={props.model.username}
                userFriends={props.model.friendsList}
                 />
                 
        </div>
    )

}