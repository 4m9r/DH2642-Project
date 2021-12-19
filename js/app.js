function defaultRoute() {
    const user = firebase.auth().currentUser
    if (user) { 
        console.log(window.location.hash);

        /*if (!(["#search", "#details", "#user", "#rec", "#quiz", "#leaderboard", "#profile"].find((knownRoute) => window.location.hash == knownRoute))) window.location.hash = "#search"; */
        if (window.location.hash != "#details" && window.location.hash != "#user"
        && window.location.hash != "#search" && window.location.hash != "#rec" 
        && window.location.hash != "#quiz" && window.location.hash != "#leaderboard" 
        && window.location.hash != "#profile") 
        
            { window.location.hash = "#search"; }
    }
    else { 
        /*if (!(["#signup", "#login"].find((knownRoute) => window.location.hash === knownRoute))) window.location.hash = "#login"; */
        if (window.location.hash != "#signup" && window.location.hash != "#login") 
            { window.location.hash = "#login"; }
            console.log(window.location.hash);

    }
}

const App = {
    props: ["model"],
    data() { return { user: firebase.auth().currentUser } },
    created() {
        window.addEventListener("hashchange", defaultRoute);

        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
            defaultRoute();
        })

        // this.model.fetchUserData();
    },
    render() {
        return (
            <div class="flexParent">
                <div class="mainConetent">
                    {this.user && <NavPresenter/>}
                    {/* <Show hash="#list"> <ListPresenter model={props.model} /> </Show> */}
                    <Show hash="#search"> <SearchPresenter model={this.model} /> </Show>
                    <Show hash="#details"> <DetailsPresenter model={this.model} /> </Show>
                    <Show hash="#user"> <ListPresenter model={this.model} /> </Show>
                    <Show hash="#rec"> <RecommendPresenter model={this.model} /> </Show>
                    <Show hash="#signup"> <SignUpPresenter model={this.model} /> </Show>
                    <Show hash="#profile"> <ProfilePresenter model={this.model} /> </Show>
                    <Show hash="#login"> <LogInPresenter model={this.model} /> </Show>
                    <Show hash="#leaderboard"> <LeaderboardPresenter model={this.model} /> </Show>
                    <Show hash="#quiz"> <QuizPresenter model={this.model} /> </Show>
                </div>
                {this.user && <div class="userlist debug"><UserListPresenter model={this.model} /></div>}
            </div>

        );
    }
}
