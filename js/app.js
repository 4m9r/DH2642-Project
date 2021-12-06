function App(props) {


    return (

        <div class="flexParent">

            <div class="mainConetent">
                {/* <QuizPresenter model={props.model} />
                <Show hash="#list"> <ListPresenter model={props.model} /> </Show> */}
                <Show hash="#search"> <SearchPresenter model={props.model} /> </Show>
                <Show hash="#details"> <DetailsPresenter model={props.model} /> </Show>
                {/* <Show hash="#quiz"> <QuizPresenter model={props.model}/> </Show>
                <Show hash="#recommend"> <RecommendPresenter model={props.model}/> </Show> */}
            </div>
            <div class="menuSideBar"><MenuView /></div>
        </div>


    );






}

function defaultRoute() {
    if (!(["#search", "#details"].find((knownRoute) => window.location.hash == knownRoute))) window.location.hash = "#search";
}


window.addEventListener("hashchange", defaultRoute());