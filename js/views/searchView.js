function SearchView(props) {
    return (
        <div class="searchBar">
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

function SearchResultsView(props) {
    return (<div >
        {props.searchResults.map(
            function (item) {
                return (
                    <span class="searchResult"  onClick={
                        e => { props.movieChosen(item.id); window.location.hash = "#details"; }
                    } >
                        <img class="searchImage" src={item.image} />
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