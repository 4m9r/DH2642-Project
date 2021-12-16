function UserListView(props) {


    return (
        <div>
            <div>
                <p style="margin-bottom: 15px;color: white;"><b>Find out what others have been watching!</b></p>

                {props.users.map(x =>

                    <span class="friendslist-display" onClick={e=> (props.setCurrentFriendView(x), window.location.hash = "#user")}>
                        <img class="profile-pic" src={x.profilepic} />
                        <span>
                        <p class="userlist-name">{x.username}</p>
                        <p class="userlist-score"><img src="https://cdn-icons.flaticon.com/png/512/919/premium/919392.png?token=exp=1639679064~hmac=62b6724922a06cfa3ae997c54bfb4c01" height={10} style="color:white;"/>{x.totalScore}</p>
                        </span>
                    </span>

                )}

            </div>
        </div>
    )

}