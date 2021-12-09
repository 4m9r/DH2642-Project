function App(props) {

    return (

        <div class="flexParent">

            
            <div class="mainConetent">
                <div class ="navbar">
                    <span class="logo">FilmBuff</span>
                    <span > <MenuView /></span>
                </div>

                {/* <Show hash="#list"> <ListPresenter model={props.model} /> </Show> */}
                <Show hash="#search"> <SearchPresenter model={props.model} /> </Show>
                <Show hash="#details"> <DetailsPresenter model={props.model} /> </Show>
                <Show hash="#user"> <ListPresenter model={props.model} /> </Show>
                <Show hash="#rec"> <RecommendPresenter model={props.model} /> </Show>
                <Show hash="#signup"> <SignUpPresenter /> </Show>
                <Show hash="#login"> <LogInPresenter model={props.model} /> </Show>
                {/* <Show hash="#quiz"> <QuizPresenter model={props.model}/> </Show> */}

            </div>

            <div class="userlist debug"><UserListPresenter model={props.model} /></div>

        </div>


    );

}

function defaultRoute() {
    if (!(["#search", "#details", "#user", "#signup", "#login","#rec"].find((knownRoute) => window.location.hash == knownRoute))) window.location.hash = "#search";
}


window.addEventListener("hashchange", defaultRoute());