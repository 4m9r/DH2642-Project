// function App(props) {
//     return (

//         <div>
//             <div>
//                 <SearchPresenter model={props.model} />

//             </div>

//             <div>
//                 <DetailsPresenter model={props.model} />

//             </div>

//         </div>




//     );


// }

function App(props) {
    

    return(

        <div>
            <QuizPresenter model={props.model} />

            <Show hash="#list"> <ListPresenter model={props.model}/> </Show>
            <Show hash="#search"> <SearchPresenter model={props.model}/> </Show>
            <Show hash="#details"> <DetailsPresenter model={props.model}/> </Show>
            <Show hash="#quiz"> <QuizPresenter model={props.model}/> </Show>
            <Show hash="#recommend"> <RecommendPresenter model={props.model}/> </Show>

        </div>


    );





    
}

function defaultRoute(){
    if(!(["#list", "#search", "#details", "#quiz", "#recommend"].find((knownRoute)=>window.location.hash==knownRoute))) window.location.hash="#search";
}


window.addEventListener("hashchange", defaultRoute());