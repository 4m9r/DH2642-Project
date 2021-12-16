function LeaderboardView(props) {
    return <div class = "lead">
        <p>Leaderboard</p>
        <table>
            {props.userData.sort(compareScore).map(user => {

                return <tr><td>{user.username}</td><td><td></td></td><td>{user.totalScore}</td></tr>

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