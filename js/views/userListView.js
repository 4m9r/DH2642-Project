function UserListView(props) {
    return (

        <div class="userlist">
            <p style="margin-bottom: 15px;color: white;"><b>Find out what others have been watching!</b></p>

            {((props.users).filter(f => (f.userID && f.userID != props.userID))).map(x =>

                <span class="userlist-display" onClick={e => (props.setCurrentFriendView(x), window.location.hash = "#user")}>
                    <span>
                        <p class="userlist-name">{x.username}</p>
                        <p class="userlist-score"><img src="https://www.pinclipart.com/picdir/big/355-3556122_4-succeed-vector-trophy-icon-png-clipart.png" height={10} style="color:white;" />{x.totalScore}</p>
                    </span>
                </span>


            )}

        </div>

    )

}