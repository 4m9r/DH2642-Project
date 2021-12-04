function SearchView(props) {
    return(
        <div>
            <input placeholder="search" type="search" onInput={e =>
            props.onText(e.target.value)
             }>
            </input>

            <button onClick={(e) =>
                props.onSearch()
            }>
                Search!
            </button>
        </div>
    );
}

function SearchResultsView(props){
    return(<div>
            {props.searchResults.map(
                function (item) {
                    return (
                           <span onClick={
                                e => { props.movieChosen(item.id); /*window.location.hash = "#details";*/ }
                            } >
                            <img src={item.image} />
                            <div>
                                {item.title}
                            </div>
                            </span>
                    );
                }
            )
            }

        </div>
    );
}