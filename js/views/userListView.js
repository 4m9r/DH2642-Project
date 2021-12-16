function UserListView(props) {


    return (
        <div>
            <div style="overflow-y: scroll;">
                <p style="margin-bottom: 15px;color: white;"><b>Find out what others have been watching!</b></p>

                {props.users.map(x =>

                    <span class="userlist-display" onClick={e=> (props.setCurrentFriendView(x), window.location.hash = "#user")}>
                        <img class="profile-pic" src={x.profilePic} />
                        <span>
                        <p class="userlist-name">{x.username}</p>
                        <p class="userlist-score"><img src="https://www.pinclipart.com/picdir/big/355-3556122_4-succeed-vector-trophy-icon-png-clipart.png" height={10} style="color:white;"/>{x.totalScore}</p>
                        </span>
                    </span>

                )}

            </div>
        </div>
    )

}