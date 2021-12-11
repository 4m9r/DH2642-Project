function UserListView(props) {

    return (
        <div>
            <div>
                <p style="margin-bottom: 15px;color: white;"><b>Find out what others have been watching!</b></p>

                {props.userFriends.map(x =>

                    <span class="friendslist-display" onClick={()=> window.alert("to be implemented")}>
                        <img class="profile-pic" src={x.profilepic} />
                        <p class="userlist-name">{x.username}</p>
                    </span>

                )}

            </div>
        </div>
    )

}