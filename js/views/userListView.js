function UserListView(props) {

    return (
        <div>
            <div>
                <p style="margin-bottom: 15px;color: white;"><b>Find out what others have been watching!</b></p>

                {props.users.map(x =>

                    <span key= {x.userID} class="friendslist-display" onClick={e=> (props.setCurrentFriendView(x), window.location.hash = "#user")}>
                        <img class="profile-pic" src={x.profilepic} />
                        <p class="userlist-name">{x.username}</p>
                    </span>

                )}

            </div>
        </div>
    )

}