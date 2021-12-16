

function LeaderboardPresenter(props) {
    // console.log(props.model.leaderboardData)
    if (props.model.leaderboardData)
        return (
            <div>
                <LeaderboardView
                    userData={props.model.leaderboardData}

                />
            </div>
        );
}
