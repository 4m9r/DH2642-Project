function App(props) {
    return (

        <div>
            <div>
                <SearchPresenter model={props.model} />

            </div>

            <div>
                <DetailsPresenter model={props.model} />

            </div>

        </div>




    );


}