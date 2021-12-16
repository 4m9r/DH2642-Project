let leaderboard = [];

function LeaderboardPresenter() {
    console.log(leaderboard);
    let x;
    x=LeaderboardData();
    console.log(x);
    return (
        <div>
            <LeaderboardView
            
                userData={x}

            
            />
        </div>
    );
}

function LeaderboardData() {
    
    firebase.database().ref("learboard").once("value", function (data) {
        console.log(data.val());
        try{
            if(data.val())
                leaderboard = data.val() || [];
                console.log(leaderboard);
                return leaderboard;
        }
        catch(e){console.log(e)}
    })
}