function LeaderboardView(props) {
    return <div class="lead">
        <p>Leaderboard</p>
        <table>
            {props.userData.sort(compareScore).map(user => {

                return <tr><td class="td-name">{user.username}</td>
                    <td class="td-score">{user.totalScore}<img class="leaerboard-pic" src="https://www.freeiconspng.com/uploads/score-icon-8.png" /></td></tr>

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