function UserListView(props) {
    return (
        <div>
            /*in an unordered list, show the list of users -- each user has a profile pic. Show preview of list or nah? */
            <div class="box">
                <h1>Check out other users' lists!</h1>
                {props.users.map(x =>
                    // display: inline-block
                    <span key={x.id}>
                            // profile pic and user's name in the same line?
                        <img src={x.profilepic} height={100} width={100} />
                        <h4>{x.name}</h4>
                        // underneath
                        {x.list.listtitle1}
                        {x.list.listtitle2}
                        {x.list.listtitle3}
                        {"..."}
                    </span>

                )}
            </div>
        </div>
    )
}