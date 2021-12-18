function SearchResultsView(props) {
    let results;
    if (props.searchResults?.items)
        results = props.searchResults.items.slice(0, 16)
    else
        results = props.searchResults

    return (<div class="results">
        {results?.map(
            function (item) {
                return (
                    <span class="searchResult" onClick={
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