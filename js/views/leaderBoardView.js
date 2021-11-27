function LeaderBoardView(props) {
    return <div>
        <p>Leader Board</p>
        <table>
            {compareScore(props.data).map(e => {

                return <tr><td>{e.user}</td><td>{e.score}</td></tr>

            })
            }

        </table>
    </div>


}



function compareScore(users) {
    for (let i = 0; i < users.length; i++)
        for (let j = i + 1; j < users.length; j++)
            if (users[j].score > users[i].score) {
                let temp = users[i];
                users[i] = users[j];
                users[j] = temp;
            }

    return users;
}