function LeaderboardView(props) {
    return <div>
        <p>Leader Board</p>
        <table>
            {props.userData.sort(compareScore).map(e => {

                return <tr><td>{e.user}</td><td>{e.score}</td></tr>

            })
            }

        </table>
    </div>


}

function compareScore(a, b) {
    if (a.score < b.score)
        return 1;
    else if (a.score > b.score)
        return -1;
    else
        return 0;
}