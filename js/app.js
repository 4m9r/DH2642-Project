function App(props) {

    return (

        <div class="flexParent">

            <div class="mainConetent">
                <div class="navbar">
                    <span class="logo">FilmBuff</span>
                    <span > <MenuView /></span>
                </div>

                {/* <Show hash="#list"> <ListPresenter model={props.model} /> </Show> */}
                <Show hash="#search"> <SearchPresenter model={props.model} /> </Show>
                <Show hash="#details"> <DetailsPresenter model={props.model} /> </Show>
                <Show hash="#user"> <ListPresenter model={props.model} /> </Show>
                <Show hash="#rec"> <RecommendPresenter model={props.model} /> </Show>
                <Show hash="#signup"> <SignUpPresenter model={props.model} /> </Show>
                <Show hash="#login"> <LogInPresenter model={props.model} /> </Show>
                <Show hash="#quiz"> <QuizPresenter model={props.model} /> </Show>

            </div>

            <div class="userlist debug"><UserListPresenter model={props.model} /></div>

        </div>






    );

}

const auth = firebase.auth();
let user = auth.currentUser;

// Not working 
function defaultRoute() {
    if (user) { if (!(["#search", "#details", "#user", "#rec", "#quiz"].find((knownRoute) => window.location.hash == knownRoute))) window.location.hash = "#search"; }
    else { if (!(["#signup", "#login"].find((knownRoute) => window.location.hash === knownRoute))) window.location.hash = "#login"; }
}


window.addEventListener("hashchange", defaultRoute());