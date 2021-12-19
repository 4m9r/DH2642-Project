
function LeaderboardPresenter(props) {
    if (props.model.leaderboardData)
        return (
            <div>
                <LeaderboardView
                    userData={props.model.leaderboardData}

                />
            </div>
        );
}
