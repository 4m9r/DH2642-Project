function defaultRoute() {
    const user = firebase.auth().currentUser
    if (user) { if (!(["#search", "#details", "#user", "#rec", "#quiz", "#leaderboard"].find((knownRoute) => window.location.hash == knownRoute))) window.location.hash = "#search"; }
    else { if (!(["#signup", "#login"].find((knownRoute) => window.location.hash === knownRoute))) window.location.hash = "#login"; }
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
                    {this.user && <div class="navbar">
                        <span class="logo">FilmBuff</span>
                        <span > <MenuView /></span>
                    </div>}
                    {/* <Show hash="#list"> <ListPresenter model={props.model} /> </Show> */}
                    <Show hash="#search"> <SearchPresenter model={this.model} /> </Show>
                    <Show hash="#details"> <DetailsPresenter model={this.model} /> </Show>
                    <Show hash="#user"> <ListPresenter model={this.model} /> </Show>
                    <Show hash="#rec"> <RecommendPresenter model={this.model} /> </Show>
                    <Show hash="#signup"> <SignUpPresenter model={this.model} /> </Show>
                    <Show hash="#login"> <LogInPresenter model={this.model} /> </Show>
                    <Show hash="#leaderboard"> <LeaderboardPresenter model={this.model} /> </Show>
                    <Show hash="#quiz"> <QuizPresenter model={this.model} /> </Show>

                </div>
                {this.user && <div class="userlist debug"><UserListPresenter model={this.model} /></div>}
            </div>

        );
    }
}
