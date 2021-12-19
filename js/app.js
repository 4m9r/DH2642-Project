function defaultRoute() {
    const user = firebase.auth().currentUser
    if (user) { 

        if (!(["#search", "#details", "#user", "#rec", "#quiz", "#leaderboard", "#profile"].find((knownRoute) => window.location.hash == knownRoute))) window.location.hash = "#search"; 
    }
    else { 
        if (!(["#signup", "#login"].find((knownRoute) => window.location.hash === knownRoute))) window.location.hash = "#login"; 

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
    },
    render() {
        return (
            <div class="flexParent">
                <div class="mainConetent">
                    {this.user && <NavPresenter />}
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
