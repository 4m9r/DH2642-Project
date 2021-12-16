function LeaderboardView(props) {
    return <div>
        * <p>Leader Board</p>
        <table>
            {props.userData.sort(compareScore).map(user => {

                return <tr><td>{user.username}</td><td>{user.totalScore}</td></tr>

            })
            }
        </table>
    </div>


}

function compareScore(a, b) {
    if (a.totalScore < b.totalScore)
        return 1;
    else if (a.totalScore > b.totalScore)
        return -1;
    else
        return 0;
}